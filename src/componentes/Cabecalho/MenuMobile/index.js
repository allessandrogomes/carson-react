const MenuMobile = ({ aoClicarMenuMobile, classeAtivo }) => {
    return (
        <div onClick={aoClicarMenuMobile} className={`${classeAtivo} max-md:block cursor-pointer hidden`} id="mobileMenu">
            <div className="w-8 h-0.5 bg-white m-2 transition ease-in" id="mobileMenuLinha1"></div>
            <div className="w-8 h-0.5 bg-white m-2 transition ease-in" id="mobileMenuLinha2"></div>
            <div className="w-8 h-0.5 bg-white m-2 transition ease-in" id="mobileMenuLinha3"></div>
        </div>
    )
}

export default MenuMobile