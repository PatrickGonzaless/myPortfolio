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
            description: "Participation in the final year project proposed by PROA with the theme of meeting the needs of the local job market. My group and I createdthe project called “NovaMente”, which is based on a platform that aimsto democratize mental health in Brazil, aiming at the inclusion of al social classes and accessibility for those in need.",
            technologies: "Technologies: JavaScript, HTML, CSS, JAVA, MySQL",
            websiteURL: "https://nova-mente.vercel.app/",
            codeURL: "https://github.com/RobertadaSilva/NovaMente",
        },
        {
            title: "EvolveFit - Online Personal Trainer (Without Domain yet)",
            subtitle: "Aug 2024 - Oct 2024",
            srcImg: "/src/assets/images/project-financas.png",
            description: "In the third semester, we developed EvolveFit, an online gym platform thatworks as a virtual personal trainer. The project followed agile methodologies(UserStories, UnitTesting, flowcharts), with prototyping in Figma, frontend inHTML, CSS and JavaScript (LocalStorage) and backend in Java. Theapplication includes user login, membership registration and creation ofpersonalized workouts, aligned with the UN Sustainable Development Goals(Health and Well-being, Partnerships)",
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
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },

        {
            title: "Portfolio - Patrick Gonzales",
            subtitle: "May 2025",
            srcImg: "/src/assets/images/LNPDevs.png",
            description: " I am developing, together with my group, a complete e-commerce, withfrontend (HTML, CSS, JS), backend (Java, Fetch API) and database (MySQL).The design is original and responsive, with project management via Scrum,currently in sprint 5. The project includes features such as registration andlogin for administrators, stockists and customers, inventory management withimages, address registration via the Brazilian Post Office API, shopping cart,purchase summary and payment screen. We use Figma for prototyping, Trellofor sprint management and Git/GitHub for versioning.",
            technologies: "Technologies: JavaScript, HTML, CSS, Java, Spring Boot, MySQL, Figma, Trello, Git/GitHub",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
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