import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "PROA Final Project - NovaMente" ,
            subtitle: "March 2022 - Jul 2022",
            srcImg: "/src/assets/images/NovaMente.png",
            description: "articipation in the final year project promoted by PROA, focused on addressing the demands of the local job market. Together with my group, we created a project called 'NovaMente', a platform designed to democratize access to mental health care in Brazil. The solution aims to make psychological support more inclusive and accessible for all social classes, especially for underserved communities. The platform offers features such as free and low-cost therapy sessions, educational content about mental health, and tools for emotional self-care, contributing to social impact and inclusion.",
            technologies: "Technologies: JavaScript, HTML, CSS, JAVA, MySQL",
            websiteURL: "https://nova-mente.vercel.app/",
            codeURL: "https://github.com/RobertadaSilva/NovaMente",
        },
        {
            title: "EvolveFit - Online Personal Trainer (Without Domain yet)",
            subtitle: "Aug 2024 - Oct 2024",
            srcImg: "/src/assets/images/EvolveFit.png",
            description: "In the third semester, we developed EvolveFit, an online gym platform that acts as a virtual personal trainer. The project followed agile methodologies (User Stories, Unit Testing, flowcharts), with prototyping in Figma, a frontend in HTML, CSS, and JavaScript (LocalStorage), and a backend in Java. The app includes login, membership registration, and personalized workout creation, aligned with the UN Sustainable Development Goals (Health and Well-being, Partnerships).",
            technologies: "Technologies: JavaScript, HTML, CSS, Figma",
            websiteURL: "https://www.figma.com/design/WEdSR8Ye6NWhf7JDKfnn9s/Untitled?t=JmTfsGBVMknaWaKs-0",
            codeURL: "https://github.com/",
        },
        {
            title: "LNP Devs - E-commerce (Without Domain yet)",
            subtitle: "Jul 2019 - Current",
            srcImg: "/src/assets/images/LNPDevs.png",
            description: " I am developing, together with my group, a complete e-commerce, withfrontend (HTML, CSS, JS), backend (Java, Fetch API) and database (MySQL).The design is original and responsive, with project management via Scrum,currently in sprint 5. The project includes features such as registration andlogin for administrators, stockists and customers, inventory management withimages, address registration via the Brazilian Post Office API, shopping cart,purchase summary and payment screen. We use Figma for prototyping, Trellofor sprint management and Git/GitHub for versioning.",
            technologies: "Technologies: JavaScript, HTML, CSS, Java, Spring Boot, MySQL, Figma, Trello, Git/GitHub",
            websiteURL: "#",
            codeURL: "https://github.com/PatrickGonzaless/LNP-devs",
        },

        {
            title: "Portfolio - Patrick Gonzales",
            subtitle: "May 2025",
            srcImg: "/src/assets/images/portfolio.png",
            description: " This portfolio was developed to professionally showcase my projects, experience, and technical skills. I used React with TypeScript to ensure scalability and static typing, along with HTML5 and CSS3 for structure and responsive styling. The design is clean, modern, and fully responsive, adapting well to different devices and screen sizes.The project features smooth animations, reusable components, and a modular code structure, following frontend development best practices. It includes sections such as About Me, Skills, Projects, and Contact, as well as interactive features like a typewriter effect and resume PDF download.This portfolio reflects my dedication to code quality, usability, and continuous growth as a developer.",
            technologies: "Technologies: TypeScript, HTML, CSS, MUI, React, Git/GitHub, Vite",
            websiteURL: "#",
            codeURL: "https://github.com/PatrickGonzaless/myPortfolio",
        }
      
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{md:6}} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection