import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";

// function DarkMode() {
//   const [darkMode, setDarkMode] = useState<boolean>(true);
//   const html_element = document.getElementsByTagName("html")[0];

//   const toggleDarkMode = () => {
//     html_element.setAttribute(
//       "data-bs-theme",
//       (!darkMode && "dark") || "light"
//     );
//     setDarkMode((x) => !x);
//   };

//   return <a onClick={toggleDarkMode}>{(darkMode && "Dark") || "Light"}</a>;
// }

// function BootStrapInfo() {
//   return (
//     <div>
//       <div className="d-none d-xl-block font-weight-bold">X-LARGE (XL)</div>
//       <div className="d-none d-lg-block d-xl-none font-weight-bold">
//         LARGE (LG)
//       </div>
//       <div className="d-none d-md-block d-lg-none font-weight-bold">
//         MEDIUM (M)
//       </div>
//       <div className="d-none d-sm-block d-md-none font-weight-bold">
//         SMALL (SM)
//       </div>
//       <div className="d-block d-sm-none alert font-weight-bold">
//         X-SMALL (Defaut)
//       </div>
//     </div>
//   );
// }

export default function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ASCII Tree</Navbar.Brand>
        {/* <Nav>
          {" "}
          <BootStrapInfo />{" "}
        </Nav> */}
        {/* <Navbar.Text className="justify-content-end">
          <DarkMode />
        </Navbar.Text> */}
      </Container>
    </Navbar>
  );
}
