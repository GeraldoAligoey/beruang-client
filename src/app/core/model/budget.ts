/**
 * Beruang API
 * Beruang API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Category } from './category';
import { Wallet } from './wallet';


export interface Budget { 
    id?: number;
    name?: string;
    period?: string;
    startDate?: string;
    limitAmount?: number;
    wallet?: Wallet;
    categories?: Array<Category>;
}

