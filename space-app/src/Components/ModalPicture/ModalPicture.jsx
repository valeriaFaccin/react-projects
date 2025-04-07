import Pictures from "../Gallery/Pictures/Pictures.jsx";
import styled from "styled-components";
import closeIcon from "/icones/fechar.png";

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
    border: none;
    background-color: transparent;
    padding: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            border: none;
            background-color: transparent;
        }
    }
`;

const ModalPicture = ({ picture, onToggleFavorite }) => {
    return (
        <>
            {picture &&
                <>
                    <Overlay/>
                    <DialogContainer open={!!picture}>
                        <Pictures picture={picture} isExpanded={true} onToggleFavorite={onToggleFavorite} />

                        <form method="dialog">
                            <button type="submit">
                                <img src={closeIcon} alt={"Close Icon"} />
                            </button>
                        </form>
                    </DialogContainer>
                </>
            }
        </>
    );
}

export default ModalPicture;
