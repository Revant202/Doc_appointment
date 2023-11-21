import React from "react";
import { CNavbar,CContainer,CNavbarBrand,CForm,CFormInput,CButton } from "@coreui/react";

function Navbar() {
  return (
    <div>
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CContainer>
      </CNavbar>
    </div>
  );
}

export default Navbar;
