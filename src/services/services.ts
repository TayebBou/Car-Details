import axios from "axios";
import { GetServerSideProps } from "next";
import { API_URL_CARS, API_URL_PHOTOS, API_URL_PRICING } from "../config/constants";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cars = await axios.get(API_URL_CARS)
    if(context.params?.carId){
        const carId = context.params.carId;
        const car = await axios.get(API_URL_CARS + carId)
        const photos = await axios.get(API_URL_PHOTOS + carId)
        const pricing = await axios.get(API_URL_PRICING + carId)
        return {
            props: {
                cars: cars.data,
                car: car.data,
                photos: photos.data,
                pricing: pricing.data
            }
        }
    }
    

    return {
        props: {
            cars: cars.data
        }
    }
}