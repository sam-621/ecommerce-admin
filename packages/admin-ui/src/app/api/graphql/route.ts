import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { type NextRequest } from 'next/server';

const users = [
  {
    userId: 1234,
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@example.com'
  },
  {
    userId: 1235,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com'
  }
];

const orders = [
  {
    orderId: 1111,
    orderDate: '2023-01-01T00:00:00Z',
    userId: 1234,
    items: [1, 1]
  },
  {
    orderId: 2222,
    orderDate: '2023-01-08T00:00:00Z',
    userId: 1234,
    items: [1]
  },
  {
    orderId: 3333,
    orderDate: '2023-01-15T00:00:00Z',
    userId: 1234,
    items: [1, 2]
  },
  {
    orderId: 4444,
    orderDate: '2023-01-01T00:00:00Z',
    userId: 1235,
    items: [2, 2]
  }
];

const items = [
  {
    itemId: 1,
    itemName: 'GraphQL Magazine',
    itemPrice: 20.0
  },
  {
    itemId: 2,
    itemName: 'Coffee',
    itemPrice: 10.0
  }
];

const typeDefs = `#graphql
  type Query {
    user(userId: Int): User
  }

  type User {
    userId: Int
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Order {
    orderId: Int
    orderDate: String
    orderPrice: Float
    user: User
    items: [Item]
  }

  type Item {
    itemId: Int
    itemName: String
    itemPrice: Float
  }
`;

const resolvers = {
  Query: {
    user(parent: (typeof users)[0], args: any, contextValue: any, info: any) {
      console.log({
        parent,
        args,
        info,
        contextValue
      });

      return users.find(user => user.userId === args.userId);
    }
  },
  User: {
    orders(parent: (typeof users)[0], args: any, contextValue: any, info: any) {
      console.log('orders on user');
      console.log({
        parent,
        args
      });

      return orders.filter(order => order.userId === parent.userId);
    }
  },
  Order: {
    items(parent: (typeof orders)[0]) {
      console.log('items on order');
      return parent.items.map(itemId => {
        return items.find(item => item.itemId === itemId);
      });
    },
    orderPrice(parent: (typeof orders)[0]) {
      console.log('order price on order');
      return parent.items
        .map(itemId => {
          return items.find(item => item.itemId === itemId);
        })
        .reduce((sum, item) => sum + (item?.itemPrice ?? 0), 0);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req })
});

export { handler as GET, handler as POST };
