import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimatedComponent/AnimatedComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React","ReactNative", "GitBash", "Git", "HTML", "CSS", "Figma", "Java", "Spring Boot", "RESTful APIs", "MySQL", "Python", "Jira", "Confluence", "Scrum", "Agile Methodologies"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Full-Stack Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Technologist Degree</Typography>
                                <Typography textAlign="center">Systems Analysis and Development</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Hello! My name is Patrick Gonzales do Nascimento, I’m currently pursuing a degree in Systems Analysis and Development at Centro Universitário Senac (expected graduation: December 2025) and I’m working as a Trainee in SQA (Solution Quality Assurance) at Wipro, providing services for Johnson & Johnson.

                        I have hands-on experience in web and mobile development, both on the frontend (HTML, CSS, JavaScript, React, ReactNative, TypeScript) and backend (Java with Spring Boot, RESTful APIs, MySQL, Phyton). I'm also proficient with tools such as Figma, GitHub, Jira, and Confluence. I've participated in several complete academic projects, from Scrum-based planning to fully functional and responsive product delivery.

                        I’m passionate about technology, continuous learning, and best development practices. I have an advanced level of English, which allows me to work seamlessly with global teams, and I bring clear communication, focused on delivering efficient, well-documented, and user-oriented solutions.

                        My goal is to keep growing as a developer, contributing to innovative teams and challenging projects where I can apply everything I’ve been learning and practicing always with responsibility, proactivity, and a strong team spirit.

                        If you'd like to learn more about my journey, experience, or projects, feel free to explore my portfolio or get in touch!
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }} >
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection