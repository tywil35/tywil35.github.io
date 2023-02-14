import { Education } from "./education.type";
import { Interest } from "./interest.type";
import { Rated } from "./rated.type";
import { UrlAlt } from "./url-alt.type";
import { WorkExperience } from "./work-experience.type";

export type Me = {
    name: string;
    address: string;
    role: string;
    mobile: string;
    email: string;
    profilePic: UrlAlt;
    github: UrlAlt;
    about: string;
    skills: Rated[];
    softwares: Rated[];
    languages: Rated[];
    education: Education[];
    workExperiences: WorkExperience[];
    interest: Interest[];
}