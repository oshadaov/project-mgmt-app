import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
    Query getProjects{
        projects{
            id
            name
            status

        }
    }
`

export {GET_PROJECTS}