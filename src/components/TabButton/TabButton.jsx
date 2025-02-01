export default function TabButton({children, onSelect, isSelected}){
    //Then props children reference to the text between the component tag <TabButton>Test</TabButton>
    // if we do not set the props. children the text will not be output.
    return(
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}