# Angular Observable Observer

This is a simple example shows how to use Observable and Observer

## Observable

The source of data

## Observer

Object Observer has three methods:
- next() - handling incoming data
- error() - handling errors
- complete() - termination of data broadcast

## Subscribe/Subscriber/Subscription

- subscribe() - is used to receive data. Method parameter is object observator - observer.
The method creates an object as an instance of the Subscriber class.
- unsubscribe() - unsubscribes the data source

## Operators

- creating operators - creates the data source ib frontend
- pipeable - these are arguments given in the pipe method. 
Based on original data creates new data.
