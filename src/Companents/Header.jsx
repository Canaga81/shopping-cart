import CartIcon from "./CartIcon"

const Header = () => {
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold">React ve Tailwind CSS Sepet Uygulamasi</h1>
            <CartIcon />
        </div>
    )
}

export default Header