import React, { useState } from 'react';

import Script from 'next/script';

const formControl = () => {

    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(data.email, parseFloat(data.amount));
    }

    
    return (
        <div>formControl</div>
    )
}

export default formControl