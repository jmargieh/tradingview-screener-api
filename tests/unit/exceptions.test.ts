import { describe, it, expect } from 'vitest';
import { MalformedRequestException } from '../../src/exceptions/MalformedRequestException.js';

describe('MalformedRequestException', () => {
  it('should create exception with all parameters', () => {
    const exception = new MalformedRequestException(
      400,
      'Bad Request',
      'https://api.example.com',
      '{"test": true}'
    );

    expect(exception).toBeInstanceOf(Error);
    expect(exception.name).toBe('MalformedRequestException');
    expect(exception.code).toBe(400);
    expect(exception.responseMsg).toBe('Bad Request');
    expect(exception.url).toBe('https://api.example.com');
    expect(exception.payload).toBe('{"test": true}');
  });

  it('should have proper error message', () => {
    const exception = new MalformedRequestException(
      404,
      'Not Found',
      'https://api.example.com/test',
      '{"filter": []}'
    );

    expect(exception.message).toContain('Error 404');
    expect(exception.message).toContain('Not Found');
    expect(exception.message).toContain('https://api.example.com/test');
    expect(exception.message).toContain('{"filter": []}');
  });

  it('should have proper stack trace', () => {
    const exception = new MalformedRequestException(
      500,
      'Internal Server Error',
      'https://api.example.com',
      '{}'
    );

    expect(exception.stack).toBeDefined();
  });

  it('should be throwable and catchable', () => {
    expect(() => {
      throw new MalformedRequestException(
        403,
        'Forbidden',
        'https://api.example.com',
        '{}'
      );
    }).toThrow(MalformedRequestException);
  });

  it('should preserve all properties when caught', () => {
    try {
      throw new MalformedRequestException(
        401,
        'Unauthorized',
        'https://api.example.com/secure',
        '{"token": "xxx"}'
      );
    } catch (error) {
      if (error instanceof MalformedRequestException) {
        expect(error.code).toBe(401);
        expect(error.responseMsg).toBe('Unauthorized');
        expect(error.url).toBe('https://api.example.com/secure');
        expect(error.payload).toBe('{"token": "xxx"}');
      } else {
        throw new Error('Should be MalformedRequestException');
      }
    }
  });

  it('should handle multiline payload', () => {
    const payload = JSON.stringify({
      filter: [],
      options: {},
      columns: ['test'],
    }, null, 2);

    const exception = new MalformedRequestException(
      400,
      'Bad Request',
      'https://api.example.com',
      payload
    );

    expect(exception.message).toContain('filter');
    expect(exception.message).toContain('options');
    expect(exception.message).toContain('columns');
  });
});
