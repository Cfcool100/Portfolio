import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe('App_function', () => {
    // Tests that Header and Main components are rendered without errors
    it('renders header and main components', () => {
        render(<App />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
    });


    // Tests that the Header component is rendered before the Main component
    it('header is rendered before main', () => {
        render(<App />);
        const header = screen.getByRole('banner');
        const main = screen.getByRole('main');
        expect(header).toBeInTheDocument();
        expect(main).toBeInTheDocument();
        expect(header).toBeBefore(main);
    });


    // Tests that the Header component contains the correct navigation links
    it('test header navigation links', () => {
        render(<Header />);
        const projectLink = screen.getByText(/project/i);
        const skillsLink = screen.getByText(/skills/i);
        const aboutLink = screen.getByText(/about/i);
        const contactLink = screen.getByText(/contact/i);
        expect(projectLink).toBeInTheDocument();
        expect(skillsLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });


    // Tests that the dynamic text in the profile section is displayed correctly
    it('test dynamic text display', () => {
        render(<App />);
        const dynamicText = screen.getByText(/Font-End Developer/i);
        expect(dynamicText).toBeInTheDocument();
    });


    // Tests that the profile image is displayed correctly
    it('test profile image display', () => {
        render(<App />);
        const imgElement = screen.getByAltText(/profile/i);
        expect(imgElement).toBeInTheDocument();
    });


    // Tests that the Main component contains the correct profile information
    it('test main component profile information', () => {
        render(<App />);
        const profileText = screen.getByText(/Hi, I'm/);
        expect(profileText).toBeInTheDocument();
    });


    // Tests that the App component renders without crashing
    it('renders without crashing', () => {
        render(<App />);
      });


    // Tests that the App component renders with the correct layout
    it('renders with correct layout', () => {
        render(<App />);
        const header = screen.getByRole('banner');
        const main = screen.getByRole('main');
        expect(header).toBeInTheDocument();
        expect(main).toBeInTheDocument();
    });


    // Tests that the App component renders with the correct styles
    it('test behaviour renders with correct styles', () => {
        render(<App />);
        const header = screen.getByRole('banner');
        const main = screen.getByRole('main');
        expect(header).toHaveStyle('background-color: #1E1E1E');
        expect(main).toHaveStyle('background-color: #F5F5F5');
    });



    // Tests that App component renders without crashing when invalid props are passed
    it('test behaviour with invalid props', () => {
        expect(() => {
            render(<App invalidProp={true} />);
        }).not.toThrow();
    });


    // Tests that the App function renders the Header component
    it('renders header component', () => {
        render(<App />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });


    // Tests that the App function renders the Main component
    it('renders Main component', () => {
        render(<App />);
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    });


});
