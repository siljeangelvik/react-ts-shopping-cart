import "../styles.css";

export function Footer() {

    return (
            <footer
                className="bg-white shadow-md mt-3 d-flex justify-content-center align-items-center"
                style={{width: "100%", position:"fixed", bottom: 0, right: 0 }}>
                <p>made by @johndoe</p>
            </footer>
    )
}