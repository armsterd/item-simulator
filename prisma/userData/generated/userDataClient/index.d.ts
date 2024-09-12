
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model CharacterInventory
 * 
 */
export type CharacterInventory = $Result.DefaultSelection<Prisma.$CharacterInventoryPayload>
/**
 * Model CharacterItem
 * 
 */
export type CharacterItem = $Result.DefaultSelection<Prisma.$CharacterItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs>;

  /**
   * `prisma.characterInventory`: Exposes CRUD operations for the **CharacterInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterInventories
    * const characterInventories = await prisma.characterInventory.findMany()
    * ```
    */
  get characterInventory(): Prisma.CharacterInventoryDelegate<ExtArgs>;

  /**
   * `prisma.characterItem`: Exposes CRUD operations for the **CharacterItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterItems
    * const characterItems = await prisma.characterItem.findMany()
    * ```
    */
  get characterItem(): Prisma.CharacterItemDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Character: 'Character',
    CharacterInventory: 'CharacterInventory',
    CharacterItem: 'CharacterItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    userDb?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "character" | "characterInventory" | "characterItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      CharacterInventory: {
        payload: Prisma.$CharacterInventoryPayload<ExtArgs>
        fields: Prisma.CharacterInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          findFirst: {
            args: Prisma.CharacterInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          findMany: {
            args: Prisma.CharacterInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>[]
          }
          create: {
            args: Prisma.CharacterInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          createMany: {
            args: Prisma.CharacterInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharacterInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          update: {
            args: Prisma.CharacterInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          deleteMany: {
            args: Prisma.CharacterInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacterInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          aggregate: {
            args: Prisma.CharacterInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterInventory>
          }
          groupBy: {
            args: Prisma.CharacterInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterInventoryCountAggregateOutputType> | number
          }
        }
      }
      CharacterItem: {
        payload: Prisma.$CharacterItemPayload<ExtArgs>
        fields: Prisma.CharacterItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          findFirst: {
            args: Prisma.CharacterItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          findMany: {
            args: Prisma.CharacterItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>[]
          }
          create: {
            args: Prisma.CharacterItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          createMany: {
            args: Prisma.CharacterItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharacterItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          update: {
            args: Prisma.CharacterItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          deleteMany: {
            args: Prisma.CharacterItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacterItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          aggregate: {
            args: Prisma.CharacterItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterItem>
          }
          groupBy: {
            args: Prisma.CharacterItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterItemCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    characters: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | UserCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    characterInventory: number
    characterItem: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterInventory?: boolean | CharacterCountOutputTypeCountCharacterInventoryArgs
    characterItem?: boolean | CharacterCountOutputTypeCountCharacterItemArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountCharacterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountCharacterItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    account: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    account: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    account: number
    name: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    account?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    account?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    account?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    account: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account?: boolean
    name?: boolean
    password?: boolean
    characters?: boolean | User$charactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    account?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | User$charactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends User$charactersArgs<ExtArgs> = {}>(args?: Subset<T, User$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly account: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.characters
   */
  export type User$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    health: number | null
    power: number | null
    money: number | null
    accountId: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: number | null
    health: number | null
    power: number | null
    money: number | null
    accountId: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: number | null
    name: string | null
    health: number | null
    power: number | null
    money: number | null
    accountId: number | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    health: number | null
    power: number | null
    money: number | null
    accountId: number | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    health: number
    power: number
    money: number
    accountId: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    health?: true
    power?: true
    money?: true
    accountId?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    health?: true
    power?: true
    money?: true
    accountId?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    health?: true
    power?: true
    money?: true
    accountId?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    health?: true
    power?: true
    money?: true
    accountId?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    health?: true
    power?: true
    money?: true
    accountId?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: number
    name: string
    health: number
    power: number
    money: number
    accountId: number
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
    accountId?: boolean
    account?: boolean | UserDefaultArgs<ExtArgs>
    characterInventory?: boolean | Character$characterInventoryArgs<ExtArgs>
    characterItem?: boolean | Character$characterItemArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>


  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    health?: boolean
    power?: boolean
    money?: boolean
    accountId?: boolean
  }

  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | UserDefaultArgs<ExtArgs>
    characterInventory?: boolean | Character$characterInventoryArgs<ExtArgs>
    characterItem?: boolean | Character$characterItemArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      account: Prisma.$UserPayload<ExtArgs>
      characterInventory: Prisma.$CharacterInventoryPayload<ExtArgs>[]
      characterItem: Prisma.$CharacterItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      health: number
      power: number
      money: number
      accountId: number
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    characterInventory<T extends Character$characterInventoryArgs<ExtArgs> = {}>(args?: Subset<T, Character$characterInventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "findMany"> | Null>
    characterItem<T extends Character$characterItemArgs<ExtArgs> = {}>(args?: Subset<T, Character$characterItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */ 
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'Int'>
    readonly name: FieldRef<"Character", 'String'>
    readonly health: FieldRef<"Character", 'Int'>
    readonly power: FieldRef<"Character", 'Int'>
    readonly money: FieldRef<"Character", 'Int'>
    readonly accountId: FieldRef<"Character", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
  }

  /**
   * Character.characterInventory
   */
  export type Character$characterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    where?: CharacterInventoryWhereInput
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    cursor?: CharacterInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * Character.characterItem
   */
  export type Character$characterItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    where?: CharacterItemWhereInput
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    cursor?: CharacterItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model CharacterInventory
   */

  export type AggregateCharacterInventory = {
    _count: CharacterInventoryCountAggregateOutputType | null
    _avg: CharacterInventoryAvgAggregateOutputType | null
    _sum: CharacterInventorySumAggregateOutputType | null
    _min: CharacterInventoryMinAggregateOutputType | null
    _max: CharacterInventoryMaxAggregateOutputType | null
  }

  export type CharacterInventoryAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterInventorySumAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterInventoryMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterInventoryMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterInventoryCountAggregateOutputType = {
    id: number
    characterId: number
    itemId: number
    _all: number
  }


  export type CharacterInventoryAvgAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterInventorySumAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterInventoryMinAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterInventoryMaxAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterInventoryCountAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    _all?: true
  }

  export type CharacterInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterInventory to aggregate.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterInventories
    **/
    _count?: true | CharacterInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterInventoryMaxAggregateInputType
  }

  export type GetCharacterInventoryAggregateType<T extends CharacterInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterInventory[P]>
      : GetScalarType<T[P], AggregateCharacterInventory[P]>
  }




  export type CharacterInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterInventoryWhereInput
    orderBy?: CharacterInventoryOrderByWithAggregationInput | CharacterInventoryOrderByWithAggregationInput[]
    by: CharacterInventoryScalarFieldEnum[] | CharacterInventoryScalarFieldEnum
    having?: CharacterInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterInventoryCountAggregateInputType | true
    _avg?: CharacterInventoryAvgAggregateInputType
    _sum?: CharacterInventorySumAggregateInputType
    _min?: CharacterInventoryMinAggregateInputType
    _max?: CharacterInventoryMaxAggregateInputType
  }

  export type CharacterInventoryGroupByOutputType = {
    id: number
    characterId: number
    itemId: number
    _count: CharacterInventoryCountAggregateOutputType | null
    _avg: CharacterInventoryAvgAggregateOutputType | null
    _sum: CharacterInventorySumAggregateOutputType | null
    _min: CharacterInventoryMinAggregateOutputType | null
    _max: CharacterInventoryMaxAggregateOutputType | null
  }

  type GetCharacterInventoryGroupByPayload<T extends CharacterInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterInventoryGroupByOutputType[P]>
        }
      >
    >


  export type CharacterInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    itemId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterInventory"]>


  export type CharacterInventorySelectScalar = {
    id?: boolean
    characterId?: boolean
    itemId?: boolean
  }

  export type CharacterInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $CharacterInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterInventory"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      itemId: number
    }, ExtArgs["result"]["characterInventory"]>
    composites: {}
  }

  type CharacterInventoryGetPayload<S extends boolean | null | undefined | CharacterInventoryDefaultArgs> = $Result.GetResult<Prisma.$CharacterInventoryPayload, S>

  type CharacterInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterInventoryCountAggregateInputType | true
    }

  export interface CharacterInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterInventory'], meta: { name: 'CharacterInventory' } }
    /**
     * Find zero or one CharacterInventory that matches the filter.
     * @param {CharacterInventoryFindUniqueArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterInventoryFindUniqueArgs>(args: SelectSubset<T, CharacterInventoryFindUniqueArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CharacterInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterInventoryFindUniqueOrThrowArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CharacterInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindFirstArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterInventoryFindFirstArgs>(args?: SelectSubset<T, CharacterInventoryFindFirstArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CharacterInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindFirstOrThrowArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CharacterInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterInventories
     * const characterInventories = await prisma.characterInventory.findMany()
     * 
     * // Get first 10 CharacterInventories
     * const characterInventories = await prisma.characterInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterInventoryWithIdOnly = await prisma.characterInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterInventoryFindManyArgs>(args?: SelectSubset<T, CharacterInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CharacterInventory.
     * @param {CharacterInventoryCreateArgs} args - Arguments to create a CharacterInventory.
     * @example
     * // Create one CharacterInventory
     * const CharacterInventory = await prisma.characterInventory.create({
     *   data: {
     *     // ... data to create a CharacterInventory
     *   }
     * })
     * 
     */
    create<T extends CharacterInventoryCreateArgs>(args: SelectSubset<T, CharacterInventoryCreateArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CharacterInventories.
     * @param {CharacterInventoryCreateManyArgs} args - Arguments to create many CharacterInventories.
     * @example
     * // Create many CharacterInventories
     * const characterInventory = await prisma.characterInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterInventoryCreateManyArgs>(args?: SelectSubset<T, CharacterInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterInventory.
     * @param {CharacterInventoryDeleteArgs} args - Arguments to delete one CharacterInventory.
     * @example
     * // Delete one CharacterInventory
     * const CharacterInventory = await prisma.characterInventory.delete({
     *   where: {
     *     // ... filter to delete one CharacterInventory
     *   }
     * })
     * 
     */
    delete<T extends CharacterInventoryDeleteArgs>(args: SelectSubset<T, CharacterInventoryDeleteArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CharacterInventory.
     * @param {CharacterInventoryUpdateArgs} args - Arguments to update one CharacterInventory.
     * @example
     * // Update one CharacterInventory
     * const characterInventory = await prisma.characterInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterInventoryUpdateArgs>(args: SelectSubset<T, CharacterInventoryUpdateArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CharacterInventories.
     * @param {CharacterInventoryDeleteManyArgs} args - Arguments to filter CharacterInventories to delete.
     * @example
     * // Delete a few CharacterInventories
     * const { count } = await prisma.characterInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterInventoryDeleteManyArgs>(args?: SelectSubset<T, CharacterInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterInventories
     * const characterInventory = await prisma.characterInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterInventoryUpdateManyArgs>(args: SelectSubset<T, CharacterInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterInventory.
     * @param {CharacterInventoryUpsertArgs} args - Arguments to update or create a CharacterInventory.
     * @example
     * // Update or create a CharacterInventory
     * const characterInventory = await prisma.characterInventory.upsert({
     *   create: {
     *     // ... data to create a CharacterInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterInventory we want to update
     *   }
     * })
     */
    upsert<T extends CharacterInventoryUpsertArgs>(args: SelectSubset<T, CharacterInventoryUpsertArgs<ExtArgs>>): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CharacterInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryCountArgs} args - Arguments to filter CharacterInventories to count.
     * @example
     * // Count the number of CharacterInventories
     * const count = await prisma.characterInventory.count({
     *   where: {
     *     // ... the filter for the CharacterInventories we want to count
     *   }
     * })
    **/
    count<T extends CharacterInventoryCountArgs>(
      args?: Subset<T, CharacterInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterInventoryAggregateArgs>(args: Subset<T, CharacterInventoryAggregateArgs>): Prisma.PrismaPromise<GetCharacterInventoryAggregateType<T>>

    /**
     * Group by CharacterInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterInventoryGroupByArgs['orderBy'] }
        : { orderBy?: CharacterInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterInventory model
   */
  readonly fields: CharacterInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterInventory model
   */ 
  interface CharacterInventoryFieldRefs {
    readonly id: FieldRef<"CharacterInventory", 'Int'>
    readonly characterId: FieldRef<"CharacterInventory", 'Int'>
    readonly itemId: FieldRef<"CharacterInventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterInventory findUnique
   */
  export type CharacterInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory findUniqueOrThrow
   */
  export type CharacterInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory findFirst
   */
  export type CharacterInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterInventories.
     */
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory findFirstOrThrow
   */
  export type CharacterInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterInventories.
     */
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory findMany
   */
  export type CharacterInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter, which CharacterInventories to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory create
   */
  export type CharacterInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterInventory.
     */
    data: XOR<CharacterInventoryCreateInput, CharacterInventoryUncheckedCreateInput>
  }

  /**
   * CharacterInventory createMany
   */
  export type CharacterInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterInventories.
     */
    data: CharacterInventoryCreateManyInput | CharacterInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterInventory update
   */
  export type CharacterInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterInventory.
     */
    data: XOR<CharacterInventoryUpdateInput, CharacterInventoryUncheckedUpdateInput>
    /**
     * Choose, which CharacterInventory to update.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory updateMany
   */
  export type CharacterInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterInventories.
     */
    data: XOR<CharacterInventoryUpdateManyMutationInput, CharacterInventoryUncheckedUpdateManyInput>
    /**
     * Filter which CharacterInventories to update
     */
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterInventory upsert
   */
  export type CharacterInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterInventory to update in case it exists.
     */
    where: CharacterInventoryWhereUniqueInput
    /**
     * In case the CharacterInventory found by the `where` argument doesn't exist, create a new CharacterInventory with this data.
     */
    create: XOR<CharacterInventoryCreateInput, CharacterInventoryUncheckedCreateInput>
    /**
     * In case the CharacterInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterInventoryUpdateInput, CharacterInventoryUncheckedUpdateInput>
  }

  /**
   * CharacterInventory delete
   */
  export type CharacterInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
    /**
     * Filter which CharacterInventory to delete.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory deleteMany
   */
  export type CharacterInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterInventories to delete
     */
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterInventory without action
   */
  export type CharacterInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInventoryInclude<ExtArgs> | null
  }


  /**
   * Model CharacterItem
   */

  export type AggregateCharacterItem = {
    _count: CharacterItemCountAggregateOutputType | null
    _avg: CharacterItemAvgAggregateOutputType | null
    _sum: CharacterItemSumAggregateOutputType | null
    _min: CharacterItemMinAggregateOutputType | null
    _max: CharacterItemMaxAggregateOutputType | null
  }

  export type CharacterItemAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemSumAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemCountAggregateOutputType = {
    id: number
    characterId: number
    itemId: number
    _all: number
  }


  export type CharacterItemAvgAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemSumAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemMinAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemMaxAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemCountAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    _all?: true
  }

  export type CharacterItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterItem to aggregate.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterItems
    **/
    _count?: true | CharacterItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterItemMaxAggregateInputType
  }

  export type GetCharacterItemAggregateType<T extends CharacterItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterItem[P]>
      : GetScalarType<T[P], AggregateCharacterItem[P]>
  }




  export type CharacterItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterItemWhereInput
    orderBy?: CharacterItemOrderByWithAggregationInput | CharacterItemOrderByWithAggregationInput[]
    by: CharacterItemScalarFieldEnum[] | CharacterItemScalarFieldEnum
    having?: CharacterItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterItemCountAggregateInputType | true
    _avg?: CharacterItemAvgAggregateInputType
    _sum?: CharacterItemSumAggregateInputType
    _min?: CharacterItemMinAggregateInputType
    _max?: CharacterItemMaxAggregateInputType
  }

  export type CharacterItemGroupByOutputType = {
    id: number
    characterId: number
    itemId: number
    _count: CharacterItemCountAggregateOutputType | null
    _avg: CharacterItemAvgAggregateOutputType | null
    _sum: CharacterItemSumAggregateOutputType | null
    _min: CharacterItemMinAggregateOutputType | null
    _max: CharacterItemMaxAggregateOutputType | null
  }

  type GetCharacterItemGroupByPayload<T extends CharacterItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterItemGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterItemGroupByOutputType[P]>
        }
      >
    >


  export type CharacterItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    itemId?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterItem"]>


  export type CharacterItemSelectScalar = {
    id?: boolean
    characterId?: boolean
    itemId?: boolean
  }

  export type CharacterItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $CharacterItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterItem"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      itemId: number
    }, ExtArgs["result"]["characterItem"]>
    composites: {}
  }

  type CharacterItemGetPayload<S extends boolean | null | undefined | CharacterItemDefaultArgs> = $Result.GetResult<Prisma.$CharacterItemPayload, S>

  type CharacterItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterItemCountAggregateInputType | true
    }

  export interface CharacterItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterItem'], meta: { name: 'CharacterItem' } }
    /**
     * Find zero or one CharacterItem that matches the filter.
     * @param {CharacterItemFindUniqueArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterItemFindUniqueArgs>(args: SelectSubset<T, CharacterItemFindUniqueArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CharacterItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterItemFindUniqueOrThrowArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CharacterItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemFindFirstArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterItemFindFirstArgs>(args?: SelectSubset<T, CharacterItemFindFirstArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CharacterItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemFindFirstOrThrowArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CharacterItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterItems
     * const characterItems = await prisma.characterItem.findMany()
     * 
     * // Get first 10 CharacterItems
     * const characterItems = await prisma.characterItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterItemWithIdOnly = await prisma.characterItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterItemFindManyArgs>(args?: SelectSubset<T, CharacterItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CharacterItem.
     * @param {CharacterItemCreateArgs} args - Arguments to create a CharacterItem.
     * @example
     * // Create one CharacterItem
     * const CharacterItem = await prisma.characterItem.create({
     *   data: {
     *     // ... data to create a CharacterItem
     *   }
     * })
     * 
     */
    create<T extends CharacterItemCreateArgs>(args: SelectSubset<T, CharacterItemCreateArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CharacterItems.
     * @param {CharacterItemCreateManyArgs} args - Arguments to create many CharacterItems.
     * @example
     * // Create many CharacterItems
     * const characterItem = await prisma.characterItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterItemCreateManyArgs>(args?: SelectSubset<T, CharacterItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterItem.
     * @param {CharacterItemDeleteArgs} args - Arguments to delete one CharacterItem.
     * @example
     * // Delete one CharacterItem
     * const CharacterItem = await prisma.characterItem.delete({
     *   where: {
     *     // ... filter to delete one CharacterItem
     *   }
     * })
     * 
     */
    delete<T extends CharacterItemDeleteArgs>(args: SelectSubset<T, CharacterItemDeleteArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CharacterItem.
     * @param {CharacterItemUpdateArgs} args - Arguments to update one CharacterItem.
     * @example
     * // Update one CharacterItem
     * const characterItem = await prisma.characterItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterItemUpdateArgs>(args: SelectSubset<T, CharacterItemUpdateArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CharacterItems.
     * @param {CharacterItemDeleteManyArgs} args - Arguments to filter CharacterItems to delete.
     * @example
     * // Delete a few CharacterItems
     * const { count } = await prisma.characterItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterItemDeleteManyArgs>(args?: SelectSubset<T, CharacterItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterItems
     * const characterItem = await prisma.characterItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterItemUpdateManyArgs>(args: SelectSubset<T, CharacterItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterItem.
     * @param {CharacterItemUpsertArgs} args - Arguments to update or create a CharacterItem.
     * @example
     * // Update or create a CharacterItem
     * const characterItem = await prisma.characterItem.upsert({
     *   create: {
     *     // ... data to create a CharacterItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterItem we want to update
     *   }
     * })
     */
    upsert<T extends CharacterItemUpsertArgs>(args: SelectSubset<T, CharacterItemUpsertArgs<ExtArgs>>): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemCountArgs} args - Arguments to filter CharacterItems to count.
     * @example
     * // Count the number of CharacterItems
     * const count = await prisma.characterItem.count({
     *   where: {
     *     // ... the filter for the CharacterItems we want to count
     *   }
     * })
    **/
    count<T extends CharacterItemCountArgs>(
      args?: Subset<T, CharacterItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterItemAggregateArgs>(args: Subset<T, CharacterItemAggregateArgs>): Prisma.PrismaPromise<GetCharacterItemAggregateType<T>>

    /**
     * Group by CharacterItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterItemGroupByArgs['orderBy'] }
        : { orderBy?: CharacterItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterItem model
   */
  readonly fields: CharacterItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharacterItem model
   */ 
  interface CharacterItemFieldRefs {
    readonly id: FieldRef<"CharacterItem", 'Int'>
    readonly characterId: FieldRef<"CharacterItem", 'Int'>
    readonly itemId: FieldRef<"CharacterItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterItem findUnique
   */
  export type CharacterItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem findUniqueOrThrow
   */
  export type CharacterItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem findFirst
   */
  export type CharacterItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterItems.
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterItems.
     */
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * CharacterItem findFirstOrThrow
   */
  export type CharacterItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterItems.
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterItems.
     */
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * CharacterItem findMany
   */
  export type CharacterItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterItems.
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * CharacterItem create
   */
  export type CharacterItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterItem.
     */
    data: XOR<CharacterItemCreateInput, CharacterItemUncheckedCreateInput>
  }

  /**
   * CharacterItem createMany
   */
  export type CharacterItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterItems.
     */
    data: CharacterItemCreateManyInput | CharacterItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterItem update
   */
  export type CharacterItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterItem.
     */
    data: XOR<CharacterItemUpdateInput, CharacterItemUncheckedUpdateInput>
    /**
     * Choose, which CharacterItem to update.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem updateMany
   */
  export type CharacterItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterItems.
     */
    data: XOR<CharacterItemUpdateManyMutationInput, CharacterItemUncheckedUpdateManyInput>
    /**
     * Filter which CharacterItems to update
     */
    where?: CharacterItemWhereInput
  }

  /**
   * CharacterItem upsert
   */
  export type CharacterItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterItem to update in case it exists.
     */
    where: CharacterItemWhereUniqueInput
    /**
     * In case the CharacterItem found by the `where` argument doesn't exist, create a new CharacterItem with this data.
     */
    create: XOR<CharacterItemCreateInput, CharacterItemUncheckedCreateInput>
    /**
     * In case the CharacterItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterItemUpdateInput, CharacterItemUncheckedUpdateInput>
  }

  /**
   * CharacterItem delete
   */
  export type CharacterItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
    /**
     * Filter which CharacterItem to delete.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem deleteMany
   */
  export type CharacterItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterItems to delete
     */
    where?: CharacterItemWhereInput
  }

  /**
   * CharacterItem without action
   */
  export type CharacterItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    account: 'account',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    health: 'health',
    power: 'power',
    money: 'money',
    accountId: 'accountId'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const CharacterInventoryScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    itemId: 'itemId'
  };

  export type CharacterInventoryScalarFieldEnum = (typeof CharacterInventoryScalarFieldEnum)[keyof typeof CharacterInventoryScalarFieldEnum]


  export const CharacterItemScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    itemId: 'itemId'
  };

  export type CharacterItemScalarFieldEnum = (typeof CharacterItemScalarFieldEnum)[keyof typeof CharacterItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    account?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    characters?: CharacterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    password?: SortOrder
    characters?: CharacterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    characters?: CharacterListRelationFilter
  }, "id" | "account">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    account?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    health?: IntFilter<"Character"> | number
    power?: IntFilter<"Character"> | number
    money?: IntFilter<"Character"> | number
    accountId?: IntFilter<"Character"> | number
    account?: XOR<UserRelationFilter, UserWhereInput>
    characterInventory?: CharacterInventoryListRelationFilter
    characterItem?: CharacterItemListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
    account?: UserOrderByWithRelationInput
    characterInventory?: CharacterInventoryOrderByRelationAggregateInput
    characterItem?: CharacterItemOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    health?: IntFilter<"Character"> | number
    power?: IntFilter<"Character"> | number
    money?: IntFilter<"Character"> | number
    accountId?: IntFilter<"Character"> | number
    account?: XOR<UserRelationFilter, UserWhereInput>
    characterInventory?: CharacterInventoryListRelationFilter
    characterItem?: CharacterItemListRelationFilter
  }, "id" | "name">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Character"> | number
    name?: StringWithAggregatesFilter<"Character"> | string
    health?: IntWithAggregatesFilter<"Character"> | number
    power?: IntWithAggregatesFilter<"Character"> | number
    money?: IntWithAggregatesFilter<"Character"> | number
    accountId?: IntWithAggregatesFilter<"Character"> | number
  }

  export type CharacterInventoryWhereInput = {
    AND?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    OR?: CharacterInventoryWhereInput[]
    NOT?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    id?: IntFilter<"CharacterInventory"> | number
    characterId?: IntFilter<"CharacterInventory"> | number
    itemId?: IntFilter<"CharacterInventory"> | number
    character?: XOR<CharacterRelationFilter, CharacterWhereInput>
  }

  export type CharacterInventoryOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type CharacterInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    OR?: CharacterInventoryWhereInput[]
    NOT?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    characterId?: IntFilter<"CharacterInventory"> | number
    itemId?: IntFilter<"CharacterInventory"> | number
    character?: XOR<CharacterRelationFilter, CharacterWhereInput>
  }, "id">

  export type CharacterInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    _count?: CharacterInventoryCountOrderByAggregateInput
    _avg?: CharacterInventoryAvgOrderByAggregateInput
    _max?: CharacterInventoryMaxOrderByAggregateInput
    _min?: CharacterInventoryMinOrderByAggregateInput
    _sum?: CharacterInventorySumOrderByAggregateInput
  }

  export type CharacterInventoryScalarWhereWithAggregatesInput = {
    AND?: CharacterInventoryScalarWhereWithAggregatesInput | CharacterInventoryScalarWhereWithAggregatesInput[]
    OR?: CharacterInventoryScalarWhereWithAggregatesInput[]
    NOT?: CharacterInventoryScalarWhereWithAggregatesInput | CharacterInventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterInventory"> | number
    characterId?: IntWithAggregatesFilter<"CharacterInventory"> | number
    itemId?: IntWithAggregatesFilter<"CharacterInventory"> | number
  }

  export type CharacterItemWhereInput = {
    AND?: CharacterItemWhereInput | CharacterItemWhereInput[]
    OR?: CharacterItemWhereInput[]
    NOT?: CharacterItemWhereInput | CharacterItemWhereInput[]
    id?: IntFilter<"CharacterItem"> | number
    characterId?: IntFilter<"CharacterItem"> | number
    itemId?: IntFilter<"CharacterItem"> | number
    character?: XOR<CharacterRelationFilter, CharacterWhereInput>
  }

  export type CharacterItemOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    character?: CharacterOrderByWithRelationInput
  }

  export type CharacterItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterItemWhereInput | CharacterItemWhereInput[]
    OR?: CharacterItemWhereInput[]
    NOT?: CharacterItemWhereInput | CharacterItemWhereInput[]
    characterId?: IntFilter<"CharacterItem"> | number
    itemId?: IntFilter<"CharacterItem"> | number
    character?: XOR<CharacterRelationFilter, CharacterWhereInput>
  }, "id">

  export type CharacterItemOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    _count?: CharacterItemCountOrderByAggregateInput
    _avg?: CharacterItemAvgOrderByAggregateInput
    _max?: CharacterItemMaxOrderByAggregateInput
    _min?: CharacterItemMinOrderByAggregateInput
    _sum?: CharacterItemSumOrderByAggregateInput
  }

  export type CharacterItemScalarWhereWithAggregatesInput = {
    AND?: CharacterItemScalarWhereWithAggregatesInput | CharacterItemScalarWhereWithAggregatesInput[]
    OR?: CharacterItemScalarWhereWithAggregatesInput[]
    NOT?: CharacterItemScalarWhereWithAggregatesInput | CharacterItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterItem"> | number
    characterId?: IntWithAggregatesFilter<"CharacterItem"> | number
    itemId?: IntWithAggregatesFilter<"CharacterItem"> | number
  }

  export type UserCreateInput = {
    account: string
    name: string
    password: string
    characters?: CharacterCreateNestedManyWithoutAccountInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    account: string
    name: string
    password: string
    characters?: CharacterUncheckedCreateNestedManyWithoutAccountInput
  }

  export type UserUpdateInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    characters?: CharacterUpdateManyWithoutAccountNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    characters?: CharacterUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    account: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterCreateInput = {
    name: string
    health?: number
    power?: number
    money?: number
    account: UserCreateNestedOneWithoutCharactersInput
    characterInventory?: CharacterInventoryCreateNestedManyWithoutCharacterInput
    characterItem?: CharacterItemCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: number
    name: string
    health?: number
    power?: number
    money?: number
    accountId: number
    characterInventory?: CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput
    characterItem?: CharacterItemUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    account?: UserUpdateOneRequiredWithoutCharactersNestedInput
    characterInventory?: CharacterInventoryUpdateManyWithoutCharacterNestedInput
    characterItem?: CharacterItemUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterInventory?: CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput
    characterItem?: CharacterItemUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: number
    name: string
    health?: number
    power?: number
    money?: number
    accountId: number
  }

  export type CharacterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryCreateInput = {
    itemId: number
    character: CharacterCreateNestedOneWithoutCharacterInventoryInput
  }

  export type CharacterInventoryUncheckedCreateInput = {
    id?: number
    characterId: number
    itemId: number
  }

  export type CharacterInventoryUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutCharacterInventoryNestedInput
  }

  export type CharacterInventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryCreateManyInput = {
    id?: number
    characterId: number
    itemId: number
  }

  export type CharacterInventoryUpdateManyMutationInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemCreateInput = {
    itemId: number
    character: CharacterCreateNestedOneWithoutCharacterItemInput
  }

  export type CharacterItemUncheckedCreateInput = {
    id?: number
    characterId: number
    itemId: number
  }

  export type CharacterItemUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    character?: CharacterUpdateOneRequiredWithoutCharacterItemNestedInput
  }

  export type CharacterItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemCreateManyInput = {
    id?: number
    characterId: number
    itemId: number
  }

  export type CharacterItemUpdateManyMutationInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    account?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CharacterInventoryListRelationFilter = {
    every?: CharacterInventoryWhereInput
    some?: CharacterInventoryWhereInput
    none?: CharacterInventoryWhereInput
  }

  export type CharacterItemListRelationFilter = {
    every?: CharacterItemWhereInput
    some?: CharacterItemWhereInput
    none?: CharacterItemWhereInput
  }

  export type CharacterInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder
    health?: SortOrder
    power?: SortOrder
    money?: SortOrder
    accountId?: SortOrder
  }

  export type CharacterRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type CharacterInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterInventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterInventorySumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemSumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterCreateNestedManyWithoutAccountInput = {
    create?: XOR<CharacterCreateWithoutAccountInput, CharacterUncheckedCreateWithoutAccountInput> | CharacterCreateWithoutAccountInput[] | CharacterUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAccountInput | CharacterCreateOrConnectWithoutAccountInput[]
    createMany?: CharacterCreateManyAccountInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CharacterCreateWithoutAccountInput, CharacterUncheckedCreateWithoutAccountInput> | CharacterCreateWithoutAccountInput[] | CharacterUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAccountInput | CharacterCreateOrConnectWithoutAccountInput[]
    createMany?: CharacterCreateManyAccountInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CharacterUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CharacterCreateWithoutAccountInput, CharacterUncheckedCreateWithoutAccountInput> | CharacterCreateWithoutAccountInput[] | CharacterUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAccountInput | CharacterCreateOrConnectWithoutAccountInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAccountInput | CharacterUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CharacterCreateManyAccountInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAccountInput | CharacterUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAccountInput | CharacterUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CharacterCreateWithoutAccountInput, CharacterUncheckedCreateWithoutAccountInput> | CharacterCreateWithoutAccountInput[] | CharacterUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAccountInput | CharacterCreateOrConnectWithoutAccountInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAccountInput | CharacterUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CharacterCreateManyAccountInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAccountInput | CharacterUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAccountInput | CharacterUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    connect?: UserWhereUniqueInput
  }

  export type CharacterInventoryCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
  }

  export type CharacterItemCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterItemCreateWithoutCharacterInput, CharacterItemUncheckedCreateWithoutCharacterInput> | CharacterItemCreateWithoutCharacterInput[] | CharacterItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemCreateOrConnectWithoutCharacterInput | CharacterItemCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterItemCreateManyCharacterInputEnvelope
    connect?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
  }

  export type CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
  }

  export type CharacterItemUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterItemCreateWithoutCharacterInput, CharacterItemUncheckedCreateWithoutCharacterInput> | CharacterItemCreateWithoutCharacterInput[] | CharacterItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemCreateOrConnectWithoutCharacterInput | CharacterItemCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterItemCreateManyCharacterInputEnvelope
    connect?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    upsert?: UserUpsertWithoutCharactersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCharactersInput, UserUpdateWithoutCharactersInput>, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterInventoryUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    set?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    disconnect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    delete?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    update?: CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterInventoryUpdateManyWithWhereWithoutCharacterInput | CharacterInventoryUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
  }

  export type CharacterItemUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterItemCreateWithoutCharacterInput, CharacterItemUncheckedCreateWithoutCharacterInput> | CharacterItemCreateWithoutCharacterInput[] | CharacterItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemCreateOrConnectWithoutCharacterInput | CharacterItemCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterItemUpsertWithWhereUniqueWithoutCharacterInput | CharacterItemUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterItemCreateManyCharacterInputEnvelope
    set?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    disconnect?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    delete?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    connect?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    update?: CharacterItemUpdateWithWhereUniqueWithoutCharacterInput | CharacterItemUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterItemUpdateManyWithWhereWithoutCharacterInput | CharacterItemUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterItemScalarWhereInput | CharacterItemScalarWhereInput[]
  }

  export type CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput> | CharacterInventoryCreateWithoutCharacterInput[] | CharacterInventoryUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterInventoryCreateOrConnectWithoutCharacterInput | CharacterInventoryCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterInventoryCreateManyCharacterInputEnvelope
    set?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    disconnect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    delete?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    connect?: CharacterInventoryWhereUniqueInput | CharacterInventoryWhereUniqueInput[]
    update?: CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput | CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterInventoryUpdateManyWithWhereWithoutCharacterInput | CharacterInventoryUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
  }

  export type CharacterItemUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterItemCreateWithoutCharacterInput, CharacterItemUncheckedCreateWithoutCharacterInput> | CharacterItemCreateWithoutCharacterInput[] | CharacterItemUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterItemCreateOrConnectWithoutCharacterInput | CharacterItemCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterItemUpsertWithWhereUniqueWithoutCharacterInput | CharacterItemUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterItemCreateManyCharacterInputEnvelope
    set?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    disconnect?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    delete?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    connect?: CharacterItemWhereUniqueInput | CharacterItemWhereUniqueInput[]
    update?: CharacterItemUpdateWithWhereUniqueWithoutCharacterInput | CharacterItemUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterItemUpdateManyWithWhereWithoutCharacterInput | CharacterItemUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterItemScalarWhereInput | CharacterItemScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutCharacterInventoryInput = {
    create?: XOR<CharacterCreateWithoutCharacterInventoryInput, CharacterUncheckedCreateWithoutCharacterInventoryInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterInventoryInput
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutCharacterInventoryNestedInput = {
    create?: XOR<CharacterCreateWithoutCharacterInventoryInput, CharacterUncheckedCreateWithoutCharacterInventoryInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterInventoryInput
    upsert?: CharacterUpsertWithoutCharacterInventoryInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutCharacterInventoryInput, CharacterUpdateWithoutCharacterInventoryInput>, CharacterUncheckedUpdateWithoutCharacterInventoryInput>
  }

  export type CharacterCreateNestedOneWithoutCharacterItemInput = {
    create?: XOR<CharacterCreateWithoutCharacterItemInput, CharacterUncheckedCreateWithoutCharacterItemInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterItemInput
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutCharacterItemNestedInput = {
    create?: XOR<CharacterCreateWithoutCharacterItemInput, CharacterUncheckedCreateWithoutCharacterItemInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterItemInput
    upsert?: CharacterUpsertWithoutCharacterItemInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutCharacterItemInput, CharacterUpdateWithoutCharacterItemInput>, CharacterUncheckedUpdateWithoutCharacterItemInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CharacterCreateWithoutAccountInput = {
    name: string
    health?: number
    power?: number
    money?: number
    characterInventory?: CharacterInventoryCreateNestedManyWithoutCharacterInput
    characterItem?: CharacterItemCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutAccountInput = {
    id?: number
    name: string
    health?: number
    power?: number
    money?: number
    characterInventory?: CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput
    characterItem?: CharacterItemUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutAccountInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAccountInput, CharacterUncheckedCreateWithoutAccountInput>
  }

  export type CharacterCreateManyAccountInputEnvelope = {
    data: CharacterCreateManyAccountInput | CharacterCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutAccountInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutAccountInput, CharacterUncheckedUpdateWithoutAccountInput>
    create: XOR<CharacterCreateWithoutAccountInput, CharacterUncheckedCreateWithoutAccountInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutAccountInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutAccountInput, CharacterUncheckedUpdateWithoutAccountInput>
  }

  export type CharacterUpdateManyWithWhereWithoutAccountInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutAccountInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    health?: IntFilter<"Character"> | number
    power?: IntFilter<"Character"> | number
    money?: IntFilter<"Character"> | number
    accountId?: IntFilter<"Character"> | number
  }

  export type UserCreateWithoutCharactersInput = {
    account: string
    name: string
    password: string
  }

  export type UserUncheckedCreateWithoutCharactersInput = {
    id?: number
    account: string
    name: string
    password: string
  }

  export type UserCreateOrConnectWithoutCharactersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterInventoryCreateWithoutCharacterInput = {
    itemId: number
  }

  export type CharacterInventoryUncheckedCreateWithoutCharacterInput = {
    id?: number
    itemId: number
  }

  export type CharacterInventoryCreateOrConnectWithoutCharacterInput = {
    where: CharacterInventoryWhereUniqueInput
    create: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterInventoryCreateManyCharacterInputEnvelope = {
    data: CharacterInventoryCreateManyCharacterInput | CharacterInventoryCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type CharacterItemCreateWithoutCharacterInput = {
    itemId: number
  }

  export type CharacterItemUncheckedCreateWithoutCharacterInput = {
    id?: number
    itemId: number
  }

  export type CharacterItemCreateOrConnectWithoutCharacterInput = {
    where: CharacterItemWhereUniqueInput
    create: XOR<CharacterItemCreateWithoutCharacterInput, CharacterItemUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterItemCreateManyCharacterInputEnvelope = {
    data: CharacterItemCreateManyCharacterInput | CharacterItemCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCharactersInput = {
    update: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type UserUpdateWithoutCharactersInput = {
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutCharactersInput = {
    id?: IntFieldUpdateOperationsInput | number
    account?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterInventoryUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterInventoryWhereUniqueInput
    update: XOR<CharacterInventoryUpdateWithoutCharacterInput, CharacterInventoryUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterInventoryCreateWithoutCharacterInput, CharacterInventoryUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterInventoryUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterInventoryWhereUniqueInput
    data: XOR<CharacterInventoryUpdateWithoutCharacterInput, CharacterInventoryUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterInventoryUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterInventoryScalarWhereInput
    data: XOR<CharacterInventoryUpdateManyMutationInput, CharacterInventoryUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterInventoryScalarWhereInput = {
    AND?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
    OR?: CharacterInventoryScalarWhereInput[]
    NOT?: CharacterInventoryScalarWhereInput | CharacterInventoryScalarWhereInput[]
    id?: IntFilter<"CharacterInventory"> | number
    characterId?: IntFilter<"CharacterInventory"> | number
    itemId?: IntFilter<"CharacterInventory"> | number
  }

  export type CharacterItemUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterItemWhereUniqueInput
    update: XOR<CharacterItemUpdateWithoutCharacterInput, CharacterItemUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterItemCreateWithoutCharacterInput, CharacterItemUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterItemUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterItemWhereUniqueInput
    data: XOR<CharacterItemUpdateWithoutCharacterInput, CharacterItemUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterItemUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterItemScalarWhereInput
    data: XOR<CharacterItemUpdateManyMutationInput, CharacterItemUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterItemScalarWhereInput = {
    AND?: CharacterItemScalarWhereInput | CharacterItemScalarWhereInput[]
    OR?: CharacterItemScalarWhereInput[]
    NOT?: CharacterItemScalarWhereInput | CharacterItemScalarWhereInput[]
    id?: IntFilter<"CharacterItem"> | number
    characterId?: IntFilter<"CharacterItem"> | number
    itemId?: IntFilter<"CharacterItem"> | number
  }

  export type CharacterCreateWithoutCharacterInventoryInput = {
    name: string
    health?: number
    power?: number
    money?: number
    account: UserCreateNestedOneWithoutCharactersInput
    characterItem?: CharacterItemCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutCharacterInventoryInput = {
    id?: number
    name: string
    health?: number
    power?: number
    money?: number
    accountId: number
    characterItem?: CharacterItemUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutCharacterInventoryInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutCharacterInventoryInput, CharacterUncheckedCreateWithoutCharacterInventoryInput>
  }

  export type CharacterUpsertWithoutCharacterInventoryInput = {
    update: XOR<CharacterUpdateWithoutCharacterInventoryInput, CharacterUncheckedUpdateWithoutCharacterInventoryInput>
    create: XOR<CharacterCreateWithoutCharacterInventoryInput, CharacterUncheckedCreateWithoutCharacterInventoryInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutCharacterInventoryInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutCharacterInventoryInput, CharacterUncheckedUpdateWithoutCharacterInventoryInput>
  }

  export type CharacterUpdateWithoutCharacterInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    account?: UserUpdateOneRequiredWithoutCharactersNestedInput
    characterItem?: CharacterItemUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutCharacterInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterItem?: CharacterItemUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateWithoutCharacterItemInput = {
    name: string
    health?: number
    power?: number
    money?: number
    account: UserCreateNestedOneWithoutCharactersInput
    characterInventory?: CharacterInventoryCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutCharacterItemInput = {
    id?: number
    name: string
    health?: number
    power?: number
    money?: number
    accountId: number
    characterInventory?: CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutCharacterItemInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutCharacterItemInput, CharacterUncheckedCreateWithoutCharacterItemInput>
  }

  export type CharacterUpsertWithoutCharacterItemInput = {
    update: XOR<CharacterUpdateWithoutCharacterItemInput, CharacterUncheckedUpdateWithoutCharacterItemInput>
    create: XOR<CharacterCreateWithoutCharacterItemInput, CharacterUncheckedCreateWithoutCharacterItemInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutCharacterItemInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutCharacterItemInput, CharacterUncheckedUpdateWithoutCharacterItemInput>
  }

  export type CharacterUpdateWithoutCharacterItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    account?: UserUpdateOneRequiredWithoutCharactersNestedInput
    characterInventory?: CharacterInventoryUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutCharacterItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterInventory?: CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyAccountInput = {
    id?: number
    name: string
    health?: number
    power?: number
    money?: number
  }

  export type CharacterUpdateWithoutAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    characterInventory?: CharacterInventoryUpdateManyWithoutCharacterNestedInput
    characterItem?: CharacterItemUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    characterInventory?: CharacterInventoryUncheckedUpdateManyWithoutCharacterNestedInput
    characterItem?: CharacterItemUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    health?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryCreateManyCharacterInput = {
    id?: number
    itemId: number
  }

  export type CharacterItemCreateManyCharacterInput = {
    id?: number
    itemId: number
  }

  export type CharacterInventoryUpdateWithoutCharacterInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemUpdateWithoutCharacterInput = {
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemUncheckedUpdateWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemUncheckedUpdateManyWithoutCharacterInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterCountOutputTypeDefaultArgs instead
     */
    export type CharacterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterDefaultArgs instead
     */
    export type CharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterInventoryDefaultArgs instead
     */
    export type CharacterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterItemDefaultArgs instead
     */
    export type CharacterItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterItemDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}