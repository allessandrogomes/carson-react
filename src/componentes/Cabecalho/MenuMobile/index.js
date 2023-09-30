import LinhaDiv from "./LinhaDiv"

const MenuMobile = ({ aoClicarMenuMobile }) => {
    return (
        <div onClick={aoClicarMenuMobile} className="max-md:block cursor-pointer hidden" id="mobileMenu">
            <LinhaDiv id="line1"/>
            <LinhaDiv id="line2"/>
            <LinhaDiv id="line3"/>
        </div>
    )
}

export default MenuMobile