import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { useLocation } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


function LandingPage() {
    const location = useLocation();
    const user = location.state.id;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getUserdata()
    }, [])


    const getUserdata = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`https://notifier-backend.vercel.app/api/v2/user/users/${user}`);
            console.log("collected info:", response.data);
            toast.success('User Data fetched');
            console.log('User data collected')
            
            setData(response.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    }

    


    //update subscription
    const updateSubscription = async() =>{
        setLoading(true);


        try {
            const subscription = 'Active';
            const response = await axios.put(`https://notifier-backend.vercel.app/api/v2/user/subscription/${user}`,{subscription:subscription});
            console.log("collected info:", response.data);
            toast.success('Subscription Active');
            console.log('Subscription updated')
            setLoading(false);
            getUserdata()

        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    }
    const deleteSubscription = async() =>{
        setLoading(true);


        try {
            const subscription = 'InActive';
            const response = await axios.put(`https://notifier-backend.vercel.app/api/v2/user/subscription/${user}`,{subscription});
            console.log("collected info:", response.data);
            toast.success('Subscription DeaActived');
            console.log('Subscription updated')
            setLoading(false);
            getUserdata()

        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    }
    return (
        <MainLayout>
            <div className="container1">

                {loading ? (
                    <MDBContainer>
                        <div className="body">
                            <h2 className="text-white">Loading User Info......</h2>
                        </div>
                    </MDBContainer>
                ) : (
                    <div className="vh-100 w-[700px] rounded-3xl" style={{ backgroundColor: '#ffffff' }}>
                        <MDBContainer>
                            <MDBRow className="justify-content-center">
                                <MDBCol md="9" lg="7" xl="5" className="mt-5">
                                    <MDBCard style={{ borderRadius: '15px' }}>
                                        <MDBCardBody className="p-4">
                                            <div className="d-flex text-black">
                                                <div className="flex-shrink-0">
                                                    <MDBCardImage
                                                    className="text-center"
                                                        style={{ width: '180px', borderRadius: '10px' }}
                                                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                                                        alt='Generic placeholder image'
                                                        fluid />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <MDBCardTitle className="font-bold">{data.name}</MDBCardTitle>
                                                    <MDBCardText>User</MDBCardText>

                                                    <div className="d-flex justify-content-start rounded-3xl p-5 mb-2 text-white"
                                                        style={{ backgroundColor: '#000000' }}>

                                                        <div className="px-3">
                                                            <p className="small text-muted mb-1 text-xl">Email</p>
                                                            <p className="mb-0">{data.email}</p>
                                                        </div>
                                                        <div className="px-3">
                                                            <p className="small text-muted mb-1 text-xl">Phone Number</p>
                                                            <p className="mb-0">{data.phone}</p>
                                                        </div>
                                                        <div className="px-3">
                                                            <p className="small text-muted mb-1 text-xl">Subscription</p>
                                                            <p className="mb-0">{data.subscription}</p>
                                                        </div>

                                                    </div>
                                                    <div className="text-center">
                                                    {data.subscription == "Active" ? (
                                                        <p>Click on the button to Unsubscribe from receiving weather updates</p>
                                                    ):(
                                                        <p>Click on the button to subscribe and start receiving weather updates</p>
                                                    )}
                                                    
                                                    </div>
                                                    <div className="d-flex pt-1 text-center">
                                                        {data.subscription == "Active" ? (
                                                            <button onClick={deleteSubscription} className="bg-gray-800 disabled justify-center items-center text-white p-3 rounded-2xl w-[200px]">UnSubscribe</button>
                                                        ) : (
                                                            <button onClick={updateSubscription} className="bg-indigo-500 justify-center items-center text-white p-3 rounded-2xl w-[200px]">Subscribe</button>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                )}

            </div>
        </MainLayout>
    )
}

export default LandingPage

