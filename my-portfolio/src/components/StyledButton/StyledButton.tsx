import { styled } from '@mui/system';

interface StyledButtonProps {
    children: React.ReactNode
    onClick: () => void;
}

const StyledButton:React.FC<StyledButtonProps> = ({ children, onClick }) => {


    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid white`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: "white",
        cursor: "pointer",
        display:"inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,

        }
    }))

    return (
        <>
            <StyledButton onClick={onClick}>{children}</StyledButton>
        </>
    )
}

export default StyledButton;
