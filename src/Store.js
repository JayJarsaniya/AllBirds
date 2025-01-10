const stores = [
    {
        id: 1,
        country: 'United States',
        name: 'Wrentham',
        layout: 'Premium Outlets',
        location: '1 Premium Outlets Blvd, Space 475, Wrentham, Massachusetts 02093, United States',
        contact: '+1 774-847-1330'
    },
    {
        id: 2,
        country: 'United States',
        name: 'Cambridge',
        layout: 'The Atrium',
        location: '29 Brattle Street, Cambridge, Massachusetts 02138, United States',
        contact: '+1 617-315-4210'
    },
    {
        id: 3,
        country: 'United States',
        name: 'Boston',
        layout: 'Boston Prudential Center',
        location: '800 Boylston St, Boston, Massachusetts 02199, United States',
        contact: '+1 857-990-1373'
    },
    {
        id: 4,
        country: 'United States',
        name: 'New York City',
        layout: 'Soho',
        location: '73 Spring St, New York, New York 10012, United States',
        contact: '+1 917-985-6646'
    },
    {
        id: 5,
        country: 'United States',
        name: 'New York City',
        layout: 'Columbus',
        location: '201 Columbus Ave, New York, New York 10023, United States',
        contact: '+1 929-300-0990'
    },
    {
        id: 6,
        country: 'United States',
        name: 'Philadelphia',
        layout: 'King of Prussia',
        location: '160 N Gulph Rd, King of Prussia, Pennsylvania 19406, United States',
        contact: '+1 484-680-7393'
    },
    {
        id: 7,
        country: 'United States',
        name: 'Washington DC',
        layout: 'Georgetown',
        location: '3135 M St. NW, Washington, District of Columbia 20007, United States',
        contact: '+1 202-921-0482'
    },
    {
        id: 8,
        country: 'United States',
        name: 'Charlotte',
        layout: 'South End',
        location: '100 West Worthington Ave, Charlotte, North Carolina 28203, United States',
        contact: '+1 980-296-0006'
    },
    {
        id: 9,
        country: 'United States',
        name: 'Atlanta',
        layout: 'Avalon',
        location: '5120 Avalon Blvd, Alpharetta, Georgia 30009, United States',
        contact: '+1 470-763-3337'
    },
    {
        id: 10,
        country: 'United States',
        name: 'Atlanta',
        layout: 'Ponce City Market',
        location: '675 Ponce de Leon Ave. NE, Suite W115B, Atlanta, Georgia 30308, United States',
        contact: '+1 404-301-7460'
    },
    {
        id: 11,
        country: 'United States',
        name: 'Nashville',
        layout: 'Green Hills',
        location: '2126 Abbott Martin Rd, Nashville, Tennessee 37215, United States',
        contact: '+1 615-953-0237'
    },
    {
        id: 12,
        country: 'United States',
        name: 'Columbus',
        layout: 'Easton Town Center',
        location: '4200 The Strand, Columbus, Ohio 43219, United States',
        contact: '+1 380-444-3335'
    },
    {
        id: 13,
        country: 'United States',
        name: 'Minneapolis',
        layout: 'North Loop',
        location: '219 N 2nd St, #106, Minneapolis, Minnesota 55401, United States',
        contact: '+1 612-682-4704'
    },
    {
        id: 14,
        country: 'United States',
        name: 'Chicago',
        layout: 'Oakbrook Center',
        location: '34 Oakbrook Center, Oak Brook, Illinois 60523, United States',
        contact: '+1 312-224-2955'
    },
    {
        id: 15,
        country: 'United States',
        name: 'Chicago',
        layout: 'Fulton Market',
        location: '833 W. Randolph St, Chicago, Illinois 60607, United States',
        contact: '+1 872-270-0933'
    },
    {
        id: 16,
        country: 'United States',
        name: 'Chicago',
        layout: 'Lincoln Park',
        location: '843 W Armitage Ave, Chicago, Illinois 60614, United States',
        contact: '+1 872-234-6039'
    },
    {
        id: 17,
        country: 'United States',
        name: 'Denver',
        layout: 'Cherry Creek S/C',
        location: '3000 E 1st Ave, Denver, Colorado 80206, United States',
        contact: '+1 303-927-0934'
    },
    {
        id: 18,
        country: 'United States',
        name: 'Boulder',
        layout: 'Pearl Street',
        location: '1218 Pearl St, Boulder, Colorado 80302, United States',
        contact: '+1 303-405-8361'
    },
    {
        id: 19,
        country: 'United States',
        name: 'Phoenix',
        layout: 'Kierland Commons',
        location: '15220 N Scottsdale Rd, Suite 180, Scottsdale, Arizona 85254, United States',
        contact: '+1 480-674-6337'
    },
    {
        id: 20,
        country: 'United States',
        name: 'Los Angeles',
        layout: 'Century City',
        location: '10250 Santa Monica Blvd, Suite 1985, Los Angeles, California 90067, United States',
        contact: '+1 213-374-2354'
    },
    {
        id: 21,
        country: 'United States',
        name: 'Los Angeles',
        layout: 'The Point',
        location: '860 S. Pacific Coast Highway, El Segundo, California 90245, United States',
        contact: '+1 424-502-2383'
    },
    {
        id: 22,
        country: 'United States',
        name: 'Los Angeles',
        layout: 'Pasadena',
        location: '77 West Colorado Blvd, Pasadena, California 91105, United States',
        contact: '+1 626-344-2622'
    },
    {
        id: 23,
        country: 'United States',
        name: 'San Diego',
        layout: 'UTC',
        location: '4545 La Jolla Village Dr, Suite H22, San Diego, California 92122, United States',
        contact: '+1 858-923-7623'
    },
    {
        id: 24,
        country: 'United States',
        name: 'San Francisco',
        layout: 'Union Square',
        location: '333 Post St, San Francisco, California 94108, United States',
        contact: '+1 415-906-3836'
    },
    {
        id: 25,
        country: 'United States',
        name: 'Seattle',
        layout: 'University Village',
        location: '2620 NE Village Lane, Seattle, Washington 98105, United States',
        contact: '+1 206-257-0102'
    },
    {
        id: 26,
        country: 'Canada',
        name: 'Toronto',
        layout: 'Yorkdale Shopping Centre',
        location: '3401 Dufferin St, Toronto, Ontario M6A 2T9, Canada',
        contact: '+1 416-789-3434'
    },
    {
        id: 27,
        country: 'Canada',
        name: 'Vancouver',
        layout: 'Robson Street',
        location: '1088 Robson St, Vancouver, British Columbia V6E 1X3, Canada',
        contact: '+1 604-239-1234'
    },
    {
        id: 28,
        country: 'United Kingdom',
        name: 'London',
        layout: 'Covent Garden',
        location: '14 James Street, Covent Garden, London WC2E 8BT, United Kingdom',
        contact: '+44 20 3026 1023'
    },
    {
        id: 29,
        country: 'Australia',
        name: 'Sydney',
        layout: 'Westfield Sydney',
        location: '188 Pitt St, Sydney, NSW 2000, Australia',
        contact: '+61 2 8073 9023'
    },
    {
        id: 30,
        country: 'Australia',
        name: 'Melbourne',
        layout: 'Chadstone Shopping Centre',
        location: '1341 Dandenong Rd, Chadstone, VIC 3148, Australia',
        contact: '+61 3 9034 9023'
    }
];

export default stores;
