//actions
export const ADD_NEW_REVIEW = 'ADD_NEW_REVIEW'
export const ADD_FIRST_REVIEW = 'ADD_FIRST_REVIEW'
export const TOGGLE_CREATE_ACCOUNT_MODAL = 'TOGGLE_CREATE_ACCOUNT_MODAL'
export const TOGGLE_CREATE_REVIEW_MODAL = 'TOGGLE_CREATE_REVIEW_MODAL'
export const TOGGLE_TOKEN_REVEAL_MODAL = 'TOGGLE_TOKEN_REVEAL_MODAL'
export const USER_DATA = 'USER_DATA'
export const REVIEWS = 'REVIEWS'
export const SECTORS = 'SECTORS'
export const COMPANIES = 'COMPANIES'
export const NEW_COMMENT = 'NEW_COMMENT'
export const LOADING_REVIEWS = 'LOADING_REVIEWS'
export const LOGGED_IN = 'LOGGED_IN'


//statuses
export const IDLE = 'IDLE'
export const PENDING = 'PENDING'
export const RESOLVED = 'RESOLVED'
export const REJECTED = 'REJECTED'
export const STARTED = 'STARTED'

export const NSE_SECTORS = [
    {
        'name': 'Agriculture',
        'description': 'This sector comprises all units engaged in agriculture, fishing and hunting.',
        'sub_sectors': ['Crop Production', 'Fishing/Hunting/Trapping',  'Livestock/ Animal Specialties​']
    },
    {
        'name': 'Real Estate',
        'description': '​This sector includes companies mainly engaged in the construction of buildings which include the construction of a house, farm, industrial, commercial or other building structures, and carrying out alterations, additions, and renovation or general repairs to these buildings',
        'sub_sectors': [
            'Building Construction',
            'Non-Building/Heavy Construction',
            'Property Management',
            'Real Estate Development',
            'Real Estate Investment Trusts(REITs)',
            'Building Structure/Completion',
            'Site Preparation Services',
            'Other Construction Services'
        ]
    },
    {
        'name': 'Consumer Goods',
        'description': 'This sector comprises companies that are engaged in the production and manufacturing of final goods. In general, these are products and services classified for personal use, specifically intended for the mass market',
        'sub_sectors': [
            'Automobiles/Auto Parts',
            'Beverages--Brewers/Distillers',
            'Beverages--Non-Alcoholic',
            'Consumer Electronics',
            'Food Products',
            'Food Products--Diversified',
            'Household Durables',
            'Personal/Household Products',
            'Textiles/Apparel',
            'Tobacco Products',
            'Toys and Games'
        ]
    
    },
    {
        'name': 'Financial Services',
        'description': 'This sector includes companies that are engaged in the provision of financial services, in investing money in predominantly financial assets, in providing services to lenders, borrowers and investors, and in providing insurance coverage of all types',
        'sub_sectors': [
            'Banking',
            'Insurance Carriers, Brokers and Services',
            'Mortgage Carriers, Brokers and Services',
            'Non-Depository Credit Institutions',
            'Other Financial Institutions'
        ]
    
    },
    {
        'name': 'Healthcare',
        'description': 'The healthcare sector comprises establishments providing healthcare services. This includes companies that manufacture healthcare equipment and supplies, and provide healthcare-related services, including distributors of products and providers (owners and operators) of healthcare facilities and organizations',
        'sub_sectors': [
            'Healthcare Providers',
            'Medical Equipment',
            'Medical Supplies',
            'Pharmaceuticals'
        ]
    
    },
    {
        'name': 'Industrial Goods',
        'description': 'This sector comprises companies primarily involved in the manufacture and distribution of capital goods, including aerospace and defense, engineering and building products, electrical equipment, industrial machinery, and packaging products for industrial and consumer products',
        'sub_sectors': [
            'Building Materials',
            'Electronic and Electrical Products',
            'Packaging/Containers',
            'Tools and Machinery'
        ]
    
    },
    {
        'name': 'Information & Communications Technology',
        'description': 'ICT consists of all technical means used to handle information and aid communication. This major sector consists of IT as well as telephony, and stresses the role of unified communications and the integration of telecommunications, intelligent management systems, and audio-visual systems in modern information technology. ',
        'sub_sectors': [
            'Computers and Peripherals',
            'Computer Based Systems',
            'Computer Software',
            'Diversified Communication Services',
            'Electronic Office Equipment',
            'Internet Service Providers',
            'IT Services',
            'Processing Systems',
            'Scientific and Technical Instruments',
            'Semiconductors',
            'Telecommunications Carriers',
            'Telecommunications Equipment',
            'Telecommunications Services',
            'Other ICT Products and Services'
        ]
    
    },
    {
        'name': '​Natural Resources',
        'description': 'This sector comprises companies that are involved in a wide range of commodity-related manufacturing industries',
        'sub_sectors': [
            'Chemicals',
            'Metals',
            'Precious Metals',
            'Precious Stones',
            'Paper/Forest Products',
            'Non-Metallic Mineral Mining',
            'Mining Services'
        ]
    
    },
    {
        'name': '​​​Oil & Gas',
        'description': 'This sector includes all companies engaged in operating and/or developing oil and gas field properties, and companies primarily engaged in recovering and producing liquid hydrocarbons from oil and gas field gases',
        'sub_sectors': [
            'Coal Extraction',
            'Coal and Coal Products Distributors',
            'Crude Oil and Natural Gas Extraction',
            'Petroleum Refining',
            'Petroleum and Petroleum Products Distributors',
            'Petroleum Bulk Stations and Terminals',
            'Gasoline Stations',
            'Energy Equipment and Services',
            'Field Services',
            'Integrated Oil and Gas Services'
        ]
    
    },
    {
        'name': 'Services',
        'description': 'This sector includes companies that are primarily engaged in providing a wide variety of services for individuals, business and government establishments, and other organizations',
        'sub_sectors': [
            'Advertising Agencies',
            'Employment Solutions',
            'Printing/Publishing',
            'Waste Management',
            'Airlines',
            'Courier/Freight/Delivery',
            'Rail Transportation',
            'Road Transportation',
            'Water Transportation',
            'Storage/Warehousing',
            'Transport-Related Services',
            'Hospitality',
            'Hotels/Lodging',
            'Education/Training',
            'Media/Entertainment',
            'Repair/Maintenance',
            'Travel and Tourism',
            'Miscellaneous Services',
            'Apparel Retailers',
            'Automobile/Auto Part Retailers',
            'Electronics/Appliances Retailers',
            'Food/Drug Retailers and Wholesalers',
            'Specialty Retailers'
        ]
    
    },
    {
        'name': 'Utilities',
        'description': 'This sector comprises establishments engaged in the provision of the following utility services: electric power, steam supply and water supply.',
        'sub_sectors': [
            'Electric Power Generation',
            'Electric Power Transmission',
            'Electric Power Distribution',
            'Water Treatment and Distribution'
        ]
    
    },
    {
        'name': 'Conglomerates',
        'description': 'This sector comprises companies that incorporate engineering and production to manufacture a varied group of products.',
        'sub_sectors': []
    
    }
];