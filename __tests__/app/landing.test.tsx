import { render, screen } from '@testing-library/react'
import LandingPage from '@/app/landing/page'

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

describe('LandingPage', () => {
  it('should render the landing page with main heading', () => {
    render(<LandingPage />)
    
    expect(screen.getByText('Transformez votre façon de travailler')).toBeInTheDocument()
  })

  it('should render the features section', () => {
    render(<LandingPage />)
    
    expect(screen.getByText('Nos fonctionnalités')).toBeInTheDocument()
  })

  it('should render the contact section', () => {
    render(<LandingPage />)
    
    expect(screen.getByText('Contactez-nous')).toBeInTheDocument()
  })

  it('should have a link to the dashboard', () => {
    render(<LandingPage />)
    
    const dashboardLink = screen.getByText('Commencer')
    expect(dashboardLink.closest('a')).toHaveAttribute('href', '/dashboard')
  })

  it('should render carousel items', () => {
    render(<LandingPage />)
    
    expect(screen.getAllByText('Optimisez votre flux de travail').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Collaboration en temps réel').length).toBeGreaterThan(0)
  })
})

