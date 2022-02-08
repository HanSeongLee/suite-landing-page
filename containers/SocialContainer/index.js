import React from "react";
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';
import LinkItem from "../../components/LinkItem";

const socials = [
    {
        name: 'facebook',
        href: '#',
        icon: (<FacebookIcon />)
    },
    {
        name: 'twitter',
        href: '#',
        icon: (<TwitterIcon />)
    },
    {
        name: 'instagram',
        href: '#',
        icon: (<InstagramIcon />)
    },
]

const SocialContainer = () => {
    return (
        <>
            {socials?.map(({icon, ...props}, index) => (
                <LinkItem {...props}
                          key={index}
                >
                    {icon}
                </LinkItem>
            ))}
        </>
    );
};

export default SocialContainer;
