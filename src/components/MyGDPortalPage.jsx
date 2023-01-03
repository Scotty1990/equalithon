import React, { useState } from 'react';
import NavBar from './NavBar';
import GDHeader from './GDHeader';
import StudentsIndividualsCards from './StudentsIndividualsCards';
import CompaniesSchoolsNonprofits from './CompaniesSchoolsNonprofits';
import SubscribersCompanies from './SubscribersCompanies';
import BottomNav from './BottomNav';
import VideoBanner from './VideoBanner';

function MyGDPortalPage() {
    const [showIconMenu, setShowIconMenu] = useState(false)

    function run() {
        setShowIconMenu(false)
        onclose()
    }

    return (
        <div onClick={() => setShowIconMenu(false)}>
            <NavBar />
            <GDHeader />
            <VideoBanner />
            <StudentsIndividualsCards 
                showIconMenu={showIconMenu}
                setShowIconMenu={setShowIconMenu}
            />
            <CompaniesSchoolsNonprofits />
            <SubscribersCompanies />
            <BottomNav />
        </div>
    );
}

export default MyGDPortalPage;