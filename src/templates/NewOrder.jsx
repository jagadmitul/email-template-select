import React from 'react'
import './new-order.css'

const NewOrder = ({ data }) => {

    const OrderItem = ({ data, currency_symbol }) => {
        const discount = data?.mrp - data?.price;
        const isDiscounted = discount > 0;
        const discountedPrice = data?.mrp - discount;
        return (
            <>
                <tr>
                    <td height={20}>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <table
                            border={0}
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            align="center"
                        >
                            <tbody>
                                <tr>
                                    <td width={130}>
                                        <img
                                            width={130}
                                            style={{
                                                display: "block",
                                                width: "100%",
                                                maxWidth: 130
                                            }}
                                            alt="img"
                                            src={data?.img}
                                        />
                                    </td>
                                    <td width={20}>&nbsp;</td>
                                    <td width={250}>
                                        <table
                                            border={0}
                                            width="100%"
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontFamily:
                                                                '"DM Sans", Arial, Helvetica, sans-serif',
                                                            fontSize: 18,
                                                            color: "#070606",
                                                            lineHeight: 21
                                                        }}
                                                    >
                                                        {data?.name}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style={{
                                                            fontFamily:
                                                                '"DM Sans", Arial, Helvetica, sans-serif',
                                                            fontSize: 14,
                                                            color: "#070606",
                                                            lineHeight: 21
                                                        }}
                                                    >
                                                        Quantitiy : {data?.qty}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td align="right" width={60}>
                                        <table
                                            border={0}
                                            width={60}
                                            cellPadding={0}
                                            cellSpacing={0}
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        align="right"
                                                        style={{
                                                            fontFamily:
                                                                '"DM Sans", Arial, Helvetica, sans-serif',
                                                            fontSize: 18,
                                                            color: "#070606"
                                                        }}
                                                    >
                                                        {currency_symbol || "$"}{isDiscounted ? discountedPrice : data?.mrp}
                                                    </td>
                                                </tr>
                                                {isDiscounted && (
                                                    <tr>
                                                        <td
                                                            align="right"
                                                            style={{
                                                                fontFamily:
                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                fontSize: 14,
                                                                color: "#5d5d5d",
                                                                textDecoration:
                                                                    "line-through"
                                                            }}
                                                        >
                                                            {currency_symbol || "$"}{data?.total}
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td
                        height={20}
                        style={{
                            borderBottom: "1px solid #e0e0e0"
                        }}
                    >
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td height={20}>&nbsp;</td>
                </tr>
            </>
        );
    }

    const Address = ({ address, city, country, zip, phone }) => {
        return (
            <>
                {address}
                <br />
                {city}, {country}
                <br />
                {zip}
                <br />
                {phone}
            </>
        );
    }

    return (
        <div>
            <table style="width:100%;max-width:100%;" width="100%" cellSpacing="0" cellPadding="0" border="0" align="center">
                <tr>
                    <td bgcolor="#F4F4F4" align="center">

                        <table className="row" style="width:600px;max-width:600px;" width="600" cellSpacing="0" cellPadding="0"
                            border="0" align="center">
                            <tr>
                                <td bgcolor="#070606" align="center">

                                    <table className="row" style="width:540px;max-width:540px;" width="540" cellSpacing="0"
                                        cellPadding="0" border="0" align="center">
                                        <tr>
                                            <td className="container-padding" align="center">



                                                <table width="540" border="0" cellPadding="0" cellSpacing="0" align="center"
                                                    className="row" style="width:540px;max-width:540px;">
                                                    <tr>
                                                        <td align="center">

                                                            <table border="0" width="100%" cellPadding="0" cellSpacing="0"
                                                                align="center" style="width:100%; max-width:100%;">

                                                                <tr>
                                                                    <td>
                                                                        <table border="0" width="100%" cellPadding="0"
                                                                            cellSpacing="0" align="center">
                                                                            <tr>
                                                                                <td width={100} align="left">
                                                                                    <img
                                                                                        width={100}
                                                                                        style={{
                                                                                            display: "block",
                                                                                            width: "100%",
                                                                                            maxWidth: 100,
                                                                                            paddingBottom: 10,
                                                                                            paddingTop: 10
                                                                                        }}
                                                                                        alt="img"
                                                                                        src="https://zapvi.in/wp-content/uploads/2024/02/Zapvi-Logo-Light.svg"
                                                                                    />
                                                                                </td>
                                                                                <td>&nbsp;</td>
                                                                                <td
                                                                                    align="right"
                                                                                    style={{
                                                                                        fontFamily:
                                                                                            '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                        fontSize: 14,
                                                                                        color: "#ffffff"
                                                                                    }}
                                                                                >
                                                                                    <a
                                                                                        href="https://zapvi.in"
                                                                                        target="_blank"
                                                                                        style={{ color: "#ffffff" }}
                                                                                    >
                                                                                        Help Center
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>

                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>



                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>


            <table style="width:100%;max-width:100%;" width="100%" cellSpacing="0" cellPadding="0" border="0" align="center">
                <tr>
                    <td bgcolor="#F4F4F4" align="center">

                        <table className="row" style="width:600px;max-width:600px;" width="600" cellSpacing="0" cellPadding="0"
                            border="0" align="center">
                            <tr>
                                <td bgcolor="#f6f6f4" align="center">

                                    <table className="row" style="width:540px;max-width:540px;" width="540" cellSpacing="0"
                                        cellPadding="0" border="0" align="center">
                                        <tr>
                                            <td className="container-padding" align="center">


                                                <table width="540" border="0" cellPadding="0" cellSpacing="0" align="center"
                                                    className="row" style="width:540px;max-width:540px;">
                                                    <tr>
                                                        <td align="center">

                                                            <table border="0" width="100%" cellPadding="0" cellSpacing="0"
                                                                align="center" style="width:100%; max-width:100%;">
                                                                <tr>
                                                                    <td height="30">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"><img width="100"
                                                                        style="display:block;width:100%;max-width:100px;"
                                                                        alt="img"
                                                                        src="http://emailmug.com/premium-template/emailpaws/notif/cr.png" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 30px;color: #070606;">
                                                                        Purchase confirmation</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="18">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 24px;color: #070606;">
                                                                        Thanks for your purchase. We will send tracking
                                                                        info when your order ships. </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="18">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 15px;color: #070606;">
                                                                        Get special goods and gifts only on our site.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="25">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center">

                                                                        <table border="0" bgcolor="#9c8563" cellPadding="0"
                                                                            cellSpacing="0">
                                                                            <tr>

                                                                                <td align="center" height="40" width="170"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 13px;color: #ffffff;font-weight: 600;letter-spacing: 0.5px;">


                                                                                    <a href="https://zapvi.in" target="_blank"
                                                                                        style="color: #ffffff">GO TO SITE</a>
                                                                                </td>

                                                                            </tr>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="18">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 15px;color: #070606;">
                                                                        or <a href="http://www.emailpaws.com" target="_blank"
                                                                            style="color: #070606"><u>View your order</u></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="30">&nbsp;</td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>

                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>



            <table style="width:100%;max-width:100%;" width="100%" cellSpacing="0" cellPadding="0" border="0" align="center">
                <tr>
                    <td bgcolor="#F4F4F4" align="center">

                        <table className="row" style="width:600px;max-width:600px;" width="600" cellSpacing="0" cellPadding="0"
                            border="0" align="center">
                            <tr>
                                <td bgcolor="#FFFFFF" align="center">

                                    <table className="row" style="width:540px;max-width:540px;" width="540" cellSpacing="0"
                                        cellPadding="0" border="0" align="center">
                                        <tr>
                                            <td className="container-padding" align="center">



                                                <table width="540" border="0" cellPadding="0" cellSpacing="0" align="center"
                                                    className="row" style="width:540px;max-width:540px;">
                                                    <tr>
                                                        <td align="center">

                                                            <table border="0" width="100%" cellPadding="0" cellSpacing="0"
                                                                align="center" style="width:100%; max-width:100%;">
                                                                <tr>
                                                                    <td height="30">&nbsp;</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <table border="0" width="100%" cellPadding="0"
                                                                            cellSpacing="0" align="center">
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 13px;color: #070606;">
                                                                                    Order Number {data?.orderNo}</td>
                                                                                <td width="30">&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 13px;color: #070606;">
                                                                                    Items Price</td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="line-height: 8px;height: 8px;font-size: 0px;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#e7e6e2"
                                                                        style="line-height: 8px;height: 8px;font-size: 0px;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20">&nbsp;</td>
                                                                </tr>
                                                                {
                                                                    data?.items?.map((order, index) => {
                                                                        return <OrderItem key={index} data={order} currency_symbol={data?.amount?.currency_symbol || '₹'} />
                                                                    })
                                                                }
                                                                <tr>
                                                                    <td height="20" style="border-bottom: 1px solid #e0e0e0">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#e7e6e2"
                                                                        style="line-height: 8px;height: 8px;font-size: 0px;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="30">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="right">

                                                                        <table border="0" width="280" cellPadding="0"
                                                                            cellSpacing="0">
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;line-height: 24px;">
                                                                                    Subtotal</td>
                                                                                <td>&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;">
                                                                                    {`${data?.amount?.currency_symbol || '₹'} ${data?.amount?.subtotal_amount}`}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;line-height: 24px;">
                                                                                    Shipping</td>
                                                                                <td>&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;">
                                                                                    {`${data?.amount?.currency_symbol || '₹'} ${data?.amount?.shipping}`}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;line-height: 24px;">
                                                                                    Tax</td>
                                                                                <td>&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;">
                                                                                    {`${data?.amount?.currency_symbol || '₹'} ${data?.amount?.tax}`}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;line-height: 24px;">
                                                                                    Discount</td>
                                                                                <td>&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;">
                                                                                    {`${data?.amount?.currency_symbol || '₹'} ${data?.amount?.discount}`}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #070606;font-weight: 600;line-height: 24px;">
                                                                                    Total Due</td>
                                                                                <td>&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #070606;">
                                                                                    <strong>{`${data?.amount?.currency_symbol || '₹'} ${data?.amount?.total}`}</strong>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;line-height: 24px;">
                                                                                    &nbsp;</td>
                                                                                <td>&nbsp;</td>
                                                                                <td align="right"
                                                                                    style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 14px;color: #070606;">
                                                                                    you saved <strong>0</strong></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="30">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td bgcolor="#e7e6e2"
                                                                        style="line-height: 8px;height: 8px;font-size: 0px;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="line-height: 15px;height: 15px;font-size: 0px;">
                                                                        &nbsp;</td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>



                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>

            <table style="width:100%;max-width:100%;" width="100%" cellSpacing="0" cellPadding="0" border="0" align="center">
                <tr>
                    <td bgcolor="#F4F4F4" align="center">

                        <table className="row" style="width:600px;max-width:600px;" width="600" cellSpacing="0" cellPadding="0"
                            border="0" align="center">
                            <tr>
                                <td bgcolor="#FFFFFF" align="center">

                                    <table className="row" style="width:540px;max-width:540px;" width="540" cellSpacing="0"
                                        cellPadding="0" border="0" align="center">
                                        <tr>
                                            <td className="container-padding" align="center">



                                                <table width="540" border="0" cellPadding="0" cellSpacing="0" align="center"
                                                    className="row" style="width:540px;max-width:540px;">
                                                    <tr>
                                                        <td align="center">

                                                            <table border="0" width="100%" cellPadding="0" cellSpacing="0"
                                                                align="center" style="width:100%; max-width:100%;">
                                                                <tr>
                                                                    <td style="line-height: 15px;height: 15px;font-size: 0px;">
                                                                        &nbsp;</td>
                                                                </tr>


                                                                <tr>
                                                                    <td align="center">

                                                                        <table className="row" style="width:260px;max-width:260px;"
                                                                            width="260" cellSpacing="0" cellPadding="0"
                                                                            border="0" align="left">
                                                                            <tr>
                                                                                <td align="center">

                                                                                    <table width="260"
                                                                                        style="width:260px;max-width:260px;"
                                                                                        cellSpacing="0" cellPadding="0"
                                                                                        border="0" align="center">

                                                                                        <tr>
                                                                                            <td align="center"
                                                                                                bgcolor="#F5F5F3">

                                                                                                <table border="0" width="200"
                                                                                                    cellPadding="0"
                                                                                                    cellSpacing="0"
                                                                                                    align="center">
                                                                                                    <tr>
                                                                                                        <td height="30">&nbsp;
                                                                                                        </td>
                                                                                                    </tr>


                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #070606;">
                                                                                                            Billing Address</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td height="18">&nbsp;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color:
                                                                                                                    "#070606",
                                                                                                                lineHeight: 22
                                                                                                            }}>
                                                                                                            <Address
                                                                                                                address={data?.billing_address?.address}
                                                                                                                city={data?.billing_address?.city}
                                                                                                                country={data?.billing_address?.country}
                                                                                                                zip={data?.billing_address?.zip}
                                                                                                                phone={data?.billing_address?.phone} />
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td height="30">&nbsp;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #070606;">
                                                                                                            Shipping Method</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td height="18">&nbsp;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style={{
                                                                                                                fontFamily:
                                                                                                                    '"DM Sans", Arial, Helvetica, sans-serif',
                                                                                                                fontSize: 13,
                                                                                                                color:
                                                                                                                    "#070606",
                                                                                                                lineHeight: 22
                                                                                                            }}
                                                                                                        >
                                                                                                            <Address
                                                                                                                address={data?.shipping_address?.address}
                                                                                                                city={data?.shipping_address?.city}
                                                                                                                country={data?.shipping_address?.country}
                                                                                                                zip={data?.shipping_address?.zip}
                                                                                                                phone={data?.shipping_address?.phone} />
                                                                                                        </td>
                                                                                                    </tr>


                                                                                                    <tr>
                                                                                                        <td height="30">&nbsp;
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>

                                                                                            </td>
                                                                                        </tr>



                                                                                    </table>

                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                        <table className="row" style="width:50px;max-width:50px;"
                                                                            width="50" cellSpacing="0" cellPadding="0"
                                                                            border="0" align="left">
                                                                            <tr>
                                                                                <td height="30"></td>
                                                                            </tr>
                                                                        </table>

                                                                        <table className="row" style="width:230px;max-width:230px;"
                                                                            width="230" cellSpacing="0" cellPadding="0"
                                                                            border="0" align="right">
                                                                            <tr>
                                                                                <td align="center">

                                                                                    <table width="230"
                                                                                        style="width:230px;max-width:230px;"
                                                                                        cellSpacing="0" cellPadding="0"
                                                                                        border="0" align="center">

                                                                                        <tr>
                                                                                            <td height="30">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td
                                                                                                style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #070606;">
                                                                                                Shipping Address</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td height="18">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td
                                                                                                style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 13px;color: #070606;line-height: 22px;">
                                                                                                Christina Aguelera <br />21 Very
                                                                                                Good Street <br />California, LA
                                                                                                90002 <br />United States</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td height="30">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td
                                                                                                style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #070606;">
                                                                                                Payment Method</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td height="18">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td
                                                                                                style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 13px;color: #070606;">
                                                                                                <img align="left"
                                                                                                    src="https://cdn.shopify.com/s/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" />
                                                                                                {data?.paymentMode}
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td height="30">&nbsp;</td>
                                                                                        </tr>



                                                                                    </table>

                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="30">&nbsp;</td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>


            <table style="width:100%;max-width:100%;" width="100%" cellSpacing="0" cellPadding="0" border="0" align="center">
                <tr>
                    <td bgcolor="#F4F4F4" align="center">

                        <table className="row" style="width:600px;max-width:600px;" width="600" cellSpacing="0" cellPadding="0"
                            border="0" align="center">
                            <tr>
                                <td bgcolor="#070606" align="center">

                                    <table className="row" style="width:540px;max-width:540px;" width="540" cellSpacing="0"
                                        cellPadding="0" border="0" align="center">
                                        <tr>
                                            <td className="container-padding" align="center">

                                                <table width="540" border="0" cellPadding="0" cellSpacing="0" align="center"
                                                    className="row" style="width:540px;max-width:540px;">
                                                    <tr>
                                                        <td align="center">

                                                            <table border="0" width="100%" cellPadding="0" cellSpacing="0"
                                                                align="center" style="width:100%; max-width:100%;">
                                                                <tr>
                                                                    <td height="40">&nbsp;</td>
                                                                </tr>

                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family:'DM Sans', Arial, Helvetica, sans-serif;font-size: 18px;color: #dadada;font-weight: 400;">
                                                                        Get in Touch</td>
                                                                </tr>

                                                                <tr>
                                                                    <td height="20">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>

                                                                        <table cellSpacing="0" cellPadding="0" border="0"
                                                                            align="center">
                                                                            <tr>
                                                                                <td width="25">
                                                                                    <a
                                                                                        href="https://www.facebook.com/zapvi.in/">
                                                                                        <img width="25"
                                                                                            style="display:block;width:100%;max-width:25px;"
                                                                                            src="https://zapvi.in/wp-content/uploads/2024/05/fb.png" />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="10">&nbsp;</td>
                                                                                <td width="25">
                                                                                    <a href="https://twitter.com/Zapviofficial">
                                                                                        <img width="25"
                                                                                            style="display:block;width:100%;max-width:25px;"
                                                                                            src="https://zapvi.in/wp-content/uploads/2024/05/tw.png" />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="10">&nbsp;</td>
                                                                                <td width="25">
                                                                                    <a href="https://www.instagram.com/zapvi/">
                                                                                        <img width="25"
                                                                                            style="display:block;width:100%;max-width:25px;"
                                                                                            src="https://zapvi.in/wp-content/uploads/2024/05/in.png" />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="10">&nbsp;</td>
                                                                                <td width="25">
                                                                                    <a href="https://in.pinterest.com/zapvi/">
                                                                                        <img width="25"
                                                                                            style="display:block;width:100%;max-width:25px;"
                                                                                            src="https://zapvi.in/wp-content/uploads/2024/05/pi.png" />
                                                                                    </a>
                                                                                </td>
                                                                                <td width="10">&nbsp;</td>
                                                                                <td width="25">
                                                                                    <a href="https://www.youtube.com/@zapvi_in">
                                                                                        <img width="25"
                                                                                            style="display:block;width:100%;max-width:25px;"
                                                                                            src="https://zapvi.in/wp-content/uploads/2024/05/youtube.png" />
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="20">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center"
                                                                        style="font-family:'Roboto', Arial, Helvetica, sans-serif;font-size: 13px;color: #dadada;line-height: 19px;">
                                                                        You are receiving this email because you are subscribed
                                                                        to our mailing list.<br />
                                                                        For any questions please send to help@zapvi.in
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center">

                                                                        <table cellSpacing="0" cellPadding="0" border="0">
                                                                            <tr>
                                                                                <td align="center"
                                                                                    style="font-family:'Roboto', Arial, Helvetica, sans-serif;font-size: 13px;color: #dadada;line-height: 20px;text-decoration: underline">
                                                                                    <a href="https://zapvi.in" target="_blank"
                                                                                        style="color: #dadada">Subscription</a>
                                                                                </td>
                                                                                <td width="20" align="center"
                                                                                    style="font-family:'Roboto', Arial, Helvetica, sans-serif;font-size: 13px;color: #dadada;line-height: 20px;">
                                                                                    |</td>
                                                                                <td align="center"
                                                                                    style="font-family:'Roboto', Arial, Helvetica, sans-serif;font-size: 13px;color: #dadada;line-height: 20px;text-decoration: underline">
                                                                                    <a href="https://zapvi.in" target="_blank"
                                                                                        style="color: #dadada">Privacy
                                                                                        Policy</a>
                                                                                </td>
                                                                                <td width="20" align="center"
                                                                                    style="font-family:'Roboto', Arial, Helvetica, sans-serif;font-size: 13px;color: #dadada;line-height: 20px;">
                                                                                    |</td>
                                                                                <td align="center"
                                                                                    style="font-family:'Roboto', Arial, Helvetica, sans-serif;font-size: 13px;color: #dadada;line-height: 20px;text-decoration: underline">
                                                                                    <a href="https://zapvi.in" target="_blank"
                                                                                        style="color: #dadada">Help Center</a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="40">&nbsp;</td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </table>



                                            </td>
                                        </tr>
                                    </table>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
        </div>
    )
}

export default NewOrder