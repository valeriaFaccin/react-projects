import Pictures from "../Gallery/Pictures/Pictures.jsx";
import styled from "styled-components";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogContainer = styled.dialog`
    position: absolute;
    top: 294px;
`;

const ModalPicture = ({ picture }) => {
    return (
        <>
            {picture &&
                <>
                    <Overlay />
                    <DialogContainer open={!!picture}>
                        <Pictures picture={picture} isExpanded={true}/>
                        <form method="dialog">
                            <button type="submit">ok</button>
                        </form>
                    </DialogContainer>
                </>
            }
        </>
    );
}

export default ModalPicture;
