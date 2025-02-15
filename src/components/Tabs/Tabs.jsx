export default function Tabs({children, buttons, ButtonsContainer = "menu"}){
    // here is a dynamic way to wrap elements as we want, here we wrap the buttons in a menu ButtonContainer
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}