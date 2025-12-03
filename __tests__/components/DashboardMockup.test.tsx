/// <reference types="@testing-library/jest-dom" />
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { DashboardMockup } from '@/components/Dashboard/DashboardMockup'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  },
}))

describe('DashboardMockup', () => {
  it('should render the dashboard with events', () => {
    render(<DashboardMockup />)
    
    expect(screen.getByText('Mes évènements')).toBeInTheDocument()
    expect(screen.getAllByText('Concert').length).toBeGreaterThan(0)
  })

  it('should open modal when clicking the add button', async () => {
    render(<DashboardMockup />)
    
    const addButton = screen.getByLabelText('Ajouter un événement')
    fireEvent.click(addButton)
    
    await waitFor(() => {
      expect(screen.getByText('Ajouter un évènement')).toBeInTheDocument()
    })
  })

  it('should close modal when clicking the close button', async () => {
    render(<DashboardMockup />)
    
    const addButton = screen.getByLabelText('Ajouter un événement')
    fireEvent.click(addButton)
    
    await waitFor(() => {
      expect(screen.getByText('Ajouter un évènement')).toBeInTheDocument()
    })
    
    const closeButton = screen.getByLabelText('Fermer la modale')
    fireEvent.click(closeButton)
    
    await waitFor(() => {
      expect(screen.queryByText('Ajouter un évènement')).not.toBeInTheDocument()
    })
  })

  it('should close modal when pressing Escape key', async () => {
    render(<DashboardMockup />)
    
    const addButton = screen.getByLabelText('Ajouter un événement')
    fireEvent.click(addButton)
    
    await waitFor(() => {
      expect(screen.getByText('Ajouter un évènement')).toBeInTheDocument()
    })
    
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    
    await waitFor(() => {
      expect(screen.queryByText('Ajouter un évènement')).not.toBeInTheDocument()
    })
  })

  it('should have form inputs in the modal', async () => {
    render(<DashboardMockup />)
    
    const addButton = screen.getByLabelText('Ajouter un événement')
    fireEvent.click(addButton)
    
    await waitFor(() => {
      expect(screen.getByLabelText('Nom de l\'évènement')).toBeInTheDocument()
      expect(screen.getByLabelText('Date de l\'évènement')).toBeInTheDocument()
    })
  })
})

