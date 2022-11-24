import images from "./images"

const data = {
    user: {
        name: 'Admin',
        img: images.avt
    },
    summary: [
        {
            title: 'Books  Returned',
            subtitle: 'Total books returned',
            value: '56,475',
            percent: 45
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '1500',
            percent: 50
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$1290',
            percent: 49
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '1070',
            percent: 69
        }

    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '38K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '12.34K',
            title: 'Books'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [

        {
            title: 'Fiction',
            value: 70
        },
        {
            title: 'Philosophy',
            value: 40
        },
        {
            title: 'Technology',
            value: 60
        },
        {
            title: 'Historical',
            value: 50
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data