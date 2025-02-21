import Link from "next/link";

const ShopButton = () => {
    return (
        <Link
            href="https://wa.me/51926868587"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e43920] text-white py-2 px-4 rounded-lg hover:bg-[#c12f1b] transition duration-300 text-center block"
            aria-label="Comprar a través de WhatsApp"
        >
            Comprar
        </Link>
    );
};

export default ShopButton;
