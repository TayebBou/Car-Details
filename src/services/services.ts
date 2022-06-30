import axios from "axios";
import { GetServerSideProps } from "next";
import { API_URL_CARS } from "../config/constants";

export const getServerSideProps: GetServerSideProps = async () => {

    const cars = await axios.get(API_URL_CARS)

    return {
        props: {
            cars: cars.data
        }
    }
}