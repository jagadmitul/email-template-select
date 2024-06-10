const EmailTemplate = ({ data }: any) => {
  return (
    <>
      <table style={{ width: '100%', maxWidth: '100%' }} width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
        <tr>
          <td bgColor="#F4F4F4" align="center">
            {/* container */}
            <table className="row" style={{ width: '600px', maxWidth: '600px' }} width="600" cellSpacing={0} cellPadding={0} border={0} align="center">
              <tr>
                <td bgColor="#ffffff" align="center">
                  {/* wrapper */}
                  <table className="row" style={{ width: '540px', maxWidth: '540px' }} width="540" cellSpacing={0} cellPadding={0} border={0} align="center">
                    <tr>
                      <td className="container-padding" align="center">
                        {/* content container */}
                        <table width="540" border={0} cellPadding={0} cellSpacing={0} align="center" className="row" style={{ width: '540px', maxWidth: '540px' }}>
                          <tr>
                            <td align="center">
                              {/* content */}
                              <table border={0} width="100%" cellPadding={0} cellSpacing={0} align="center" style={{ width: '100%', maxWidth: '100%' }}>
                                <tr>
                                  <td height={40}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <table border={0} width="100%" cellPadding={0} cellSpacing={0} align="center">
                                      <tr>
                                        <td width={100} align="left">
                                          <img align="left" width={100} style={{ display: 'block', width: '100%', maxWidth: '100px' }} alt="img" src="https://zapvi.in/wp-content/uploads/2024/02/Zapvi-Logo-Dark.svg" />
                                        </td>
                                        <td width={30}>&nbsp;</td>
                                        <td align="right" style={{ fontFamily: "'DM Sans', Arial, Helvetica, sans-serif", fontSize: '14px', color: '#070606' }}>
                                          Help Center
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height={40}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    <img width={100} style={{ display: 'block', width: '100%', maxWidth: '100px' }} alt="img" src={data.verification_url} />
                                  </td>
                                </tr>
                                <tr>
                                  <td height={20}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td align="center" style={{ fontFamily: "'DM Sans', Arial, Helvetica, sans-serif", fontSize: '30px', color: '#070606' }}>
                                    Forgot Your Password ?
                                  </td>
                                </tr>
                                <tr>
                                  <td height={18}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: "'DM Sans', Arial, Helvetica, sans-serif", fontSize: '14px', color: '#070606', lineHeight: '22px' }}>
                                    Follow this link to reset your customer account password at notif_store2. If you didn't request a new password, you can safely delete this email.{' '}
                                  </td>
                                </tr>
                                <tr>
                                  <td height={20}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: "'DM Sans', Arial, Helvetica, sans-serif", fontSize: '14px', color: '#070606' }}>
                                    <a href="#" target="_blank">
                                      {data.verification_url}
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td height={20}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td align="center">
                                    {/* button */}
                                    <table height={30} border={0} bgColor="#070606" cellPadding={0} cellSpacing={0}>
                                      <tr>
                                        <td align="center" height={50} width={220} style={{ fontFamily: "'DM Sans', Arial, Helvetica, sans-serif", fontSize: '13px', color: '#ffffff', fontWeight: '600', letterSpacing: '0.5px' }}>
                                          <a href={data.verification_url} target="_blank" style={{ color: '#ffffff' }}>
                                            RESET YOU PASSWORD
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height={18}>&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: "'DM Sans', Arial, Helvetica, sans-serif", fontSize: '14px', color: '#070606' }}>
                                    If you have any question regarding this email. Please feel free to contact us.{' '}
                                  </td>
                                </tr>
                                <tr>
                                  <td height={40}>&nbsp;</td>
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
    </>
  )
}

export default EmailTemplate;