const job = (state = {
    title: "",
    description: ""
}, action) => {
    switch (action.type) {  
        case 'INITIALIZE_JOB':
            return {
                ...state,
                title: action.job.jobTitle,
                description: action.job.jobDescription,
                jobID: action.job.jobID,
                teamID: action.job.teamID,
                quote: action.job.quote,
                approved: action.job.approved,
                approvedBy: action.job.approvedBy,
                createdAt: action.job.createdAt,
                updatedAt: action.job.updatedAt
            }
        default: 
            return state
        }
}

export default job