interface Task {
    key: string,
    name: string
}

type Tasks = Task[]

export const collatedTasks: Tasks = [
    {key: 'INBOX', name: 'Inbox'},
    {key: 'TODAY', name: 'Today'},
    {key: 'NEXT_7', name: 'Next 7 days'},
]
