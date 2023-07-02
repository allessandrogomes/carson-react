function MenuMobile() {
    return (
        <div className="max-md:block cursor-pointer hidden" id="mobileMenu">
            <div className="w-8 h-0.5 bg-white m-2 transition ease-in" id="line1"></div>
            <div className="w-8 h-0.5 bg-white m-2 transition ease-in" id="line2"></div>
            <div className="w-8 h-0.5 bg-white m-2 transition ease-in" id="line3"></div>
        </div>
    )
}

export default MenuMobile