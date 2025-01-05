export interface usersCartDataType {
    userId: string;
    cartItems: string[];
}

export const usersCartData: usersCartDataType[] = [
    {
        userId: '1',
        cartItems: ['1', '3', '8']
    },
    {
        userId: '2',
        cartItems: ['2', '6']
    },
    {
        userId: '3',
        cartItems: []
    }
]
