import swal from "sweetalert2";

export function handleError(error) {

    const { response } = error;

    const { data } = response;

    if (error && data) {

        let errors = [];

        if (typeof (data) === "object") {

            for (let prop in data) {
                errors = [...errors, data[prop]];
            }

        }
        else if (typeof (data) === "string") {
            errors = [data];
        }

        if (errors.length > 0) {

            swal("Error", errors.join(' & '), "error");

        }


    }
}