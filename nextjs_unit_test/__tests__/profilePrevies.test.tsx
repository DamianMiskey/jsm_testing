import { render } from "@testing-library/react";
import ProfilePreview from "@/components/ProfilePreview";
import { TwitterIcon, LinkedInIcon, GitHubIcon } from "@/components/input-fields/Icons";

describe( "ProfilePreview Component", () => {
    const mockProfile= {
        firstName: "Damian",
        lastName: " Js Mastery",
        email:'damian.miskey@yahoo.com',
        description: "Full-stack developer with 5 years of experience in building web applications.",
        imageUrl: "/test/sample-image.webp",
    };

    
    const mockSocials = [
        { platform: 'x', url: 'x.com/damian', Icon: TwitterIcon },
        { platform: 'linkedin', url: 'linkedin.com/in/damian', Icon: LinkedInIcon },
        { platform: 'github', url: 'github.com/damian', Icon: GitHubIcon },
    ]


    it('should render correctly and match snapshot', () => {
        const {asFragment: profileFragment} = render(<ProfilePreview profile={mockProfile} socials={mockSocials} />);

        expect(profileFragment()).toMatchSnapshot();
    })
});
