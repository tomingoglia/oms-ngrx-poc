import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";

@Injectable()
export class FakeServerInterceptor implements HttpInterceptor {
  constructor() {}
  //simulate the server with an observable
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            // get order legacy
            if (
              request.url.endsWith("/orders-legacy") &&
              request.method === "GET"
            ) {
              const orderLegacy = {
                id: "99adbfc4-8fbb-e811-af11-000d3a30a3ba",
                version: "AAAAAElojH0=",
                number: "10039",
                accountId: "244cc9ff-b9b4-4889-ba0a-9430ea9c0d72",
                total: 200.0,
                items: 6,
                pieces: 27,
                weight: 531.85,
                shipDate: "2018-10-02",
                memo: null,
                purchaseOrder: null,
                instructions: null,
                dropCodeId: null,
                dropCode: null,
                dropCodeDescription: null,
                dropCodeDisplay: " - ",
                status: "Draft",
                statusReason: null,
                rejectedMessage: null,
                source: "FSA Connect",
                owner: "Billings Tester",
                createdBy: "Billings Tester",
                updatedBy: "Billings Tester",
                submittedBy: "System",
                created: "2018-09-18T22:11:19.9878985Z",
                updated: "2018-09-18T22:11:19.7691423Z",
                submitted: null,
                account: {
                  id: "244cc9ff-b9b4-4889-ba0a-9430ea9c0d72",
                  name: "ABC Food",
                  number: "9992658",
                  creditHold: false
                },
                profitAnalysis: {
                  caseEquivalentQuantity: 27.0,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  profitPerCaseEquivalent: 0,
                  nextProfitTier: 1.0,
                  amountToNextProfitTier: 0.88
                },
                productStatuses: null,
                missingCriticalItems: null,
                submitOverridesHasErrors: null
              };
              return of(new HttpResponse({ status: 200, body: orderLegacy }));
            }

            // get orders detail legacy
            if (
              request.url.endsWith("/orders-detail-legacy") &&
              request.method === "GET"
            ) {
              const orderDetailLegacy = [
                {
                  id: "04adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  version: "AAAAAElojH8=",
                  orderId: "02adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  productId: "ab8e1834-58a2-4bb6-b54c-3650c02eadcd",
                  price: 40.0,
                  priceCode: null,
                  quantity: 2,
                  caseEquivalentQuantity: 2.0,
                  shippedQuantity: null,
                  brokenCase: false,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  cuttingInstructions1Id: null,
                  cuttingInstructions2Id: null,
                  cuttingInstructions3Id: null,
                  specialMessage: null,
                  isPrintSpecialMessage: false,
                  specialPriceCode: null,
                  temporaryOverride: false,
                  permanentOverride: false,
                  sequence: 1,
                  updatedBy: "Billings Tester",
                  updated: "2018-09-18T22:11:21.1717022Z",
                  pricebook: 7620,
                  product: {
                    id: "ab8e1834-58a2-4bb6-b54c-3650c02eadcd",
                    number: "118162",
                    name: "SCRUBBER 1.75Z STAINLESS STEEL",
                    description:
                      "1.75 OZ HIGH QUALITY STAINLESS STEEL SCRUBBER, CONTINUOS WIRE CONSTRUCTION FOR TOUGH CLEANING CHORES. PRODUCT OF CHINA.",
                    brand: "PROPAK O",
                    fsaBranded: true,
                    classNumber: " 76",
                    breakCase: false,
                    pack: 1,
                    size: "12CT",
                    packSize: "1/12CT",
                    weight: 1.75,
                    averageWeight: null,
                    nonStock: null,
                    nonStockMessage: null,
                    groupPurchasing: null,
                    randomWeight: false,
                    proprietary: false,
                    imageUrl: null,
                    authorized: true,
                    restricted: false,
                    deactivated: false,
                    orderable: true,
                    orderableMessage: null,
                    suspended: false,
                    proprietaryToAnotherAccount: false,
                    tags: [],
                    badges: [{ name: "Dry", display: "Dry" }],
                    pricing: {
                      productId: "ab8e1834-58a2-4bb6-b54c-3650c02eadcd",
                      productNumber: "118162",
                      casePrice: 40.0,
                      priceCode: "L",
                      priceCodeDescription: "L - Customer PB/Class Override",
                      eachPrice: null,
                      eachPriceCode: null,
                      eachPriceCodeDescription: null,
                      quantityOnHand: 166,
                      specialPriceCode: null
                    },
                    salesData: {
                      productId: "ab8e1834-58a2-4bb6-b54c-3650c02eadcd",
                      pricing: {
                        caseCost: 40.0,
                        eachCost: null,
                        caseGrossProfit: 0,
                        caseGrossProfitPercent: 0,
                        eachGrossProfit: null,
                        eachGrossProfitPercent: null,
                        isCaseOverride: true,
                        isEachOverride: false,
                        canOverride: true,
                        isDeviated: false,
                        lastInvoiceCasePrice: null,
                        lastInvoiceCaseQuantity: null,
                        lastInvoiceEachPrice: null,
                        lastInvoiceEachQuantity: null,
                        autoApplySpecialPriceCode: null,
                        starCasePrice1: 40.0,
                        starCasePrice3: 40.0,
                        starCasePrice5: 40.0,
                        starEachPrice1: null,
                        starEachPrice3: null,
                        starEachPrice5: null,
                        caseOverrideThreshold: 40.0,
                        eachOverrideThreshold: null,
                        flyerPrices: []
                      },
                      freight: {
                        code: "I",
                        caseAmount: 0.07,
                        eachAmount: null
                      },
                      caseHistory: null,
                      eachHistory: null
                    },
                    featured: false,
                    critical: false
                  }
                },
                {
                  id: "06adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  version: "AAAAAElojIA=",
                  orderId: "02adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  productId: "42dd5337-c3a7-4f09-bd2d-4ddbf1ce4197",
                  price: 40.0,
                  priceCode: null,
                  quantity: 1,
                  caseEquivalentQuantity: 1.0,
                  shippedQuantity: null,
                  brokenCase: false,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  cuttingInstructions1Id: null,
                  cuttingInstructions2Id: null,
                  cuttingInstructions3Id: null,
                  specialMessage: null,
                  isPrintSpecialMessage: false,
                  specialPriceCode: null,
                  temporaryOverride: false,
                  permanentOverride: false,
                  sequence: 2,
                  updatedBy: "Billings Tester",
                  updated: "2018-09-18T22:11:23.5030213Z",
                  pricebook: 7630,
                  product: {
                    id: "42dd5337-c3a7-4f09-bd2d-4ddbf1ce4197",
                    number: "874722",
                    name: "BLEACH LIQUID ULTRA GERMICIDAL",
                    description:
                      "HOSPITAL GRADE 6% GERMICIDAL LIQUID BLEACH. SDS AVAILABLE ON FSAFOOD.COM REPLACES FSA 498734",
                    brand: "PROPOWER",
                    fsaBranded: true,
                    classNumber: " 76",
                    breakCase: false,
                    pack: 6,
                    size: "121Z",
                    packSize: "6/121Z",
                    weight: 61.1,
                    averageWeight: null,
                    nonStock: "Ship Upon Receipt",
                    nonStockMessage: "SPOKANE SKIPDAY / DATE TUES FLWG WEEK",
                    groupPurchasing: null,
                    randomWeight: false,
                    proprietary: false,
                    imageUrl: "https://cxp-cdn.azureedge.net/cards/874722",
                    authorized: true,
                    restricted: false,
                    deactivated: false,
                    orderable: true,
                    orderableMessage: null,
                    suspended: false,
                    proprietaryToAnotherAccount: false,
                    tags: [],
                    badges: [
                      { name: "NonGMO", display: "Non GMO" },
                      { name: "Dry", display: "Dry" }
                    ],
                    pricing: {
                      productId: "42dd5337-c3a7-4f09-bd2d-4ddbf1ce4197",
                      productNumber: "874722",
                      casePrice: 40.0,
                      priceCode: "L",
                      priceCodeDescription: "L - Customer PB/Class Override",
                      eachPrice: null,
                      eachPriceCode: null,
                      eachPriceCodeDescription: null,
                      quantityOnHand: 0,
                      specialPriceCode: null
                    },
                    salesData: {
                      productId: "42dd5337-c3a7-4f09-bd2d-4ddbf1ce4197",
                      pricing: {
                        caseCost: 40.0,
                        eachCost: null,
                        caseGrossProfit: 0,
                        caseGrossProfitPercent: 0,
                        eachGrossProfit: null,
                        eachGrossProfitPercent: null,
                        isCaseOverride: true,
                        isEachOverride: false,
                        canOverride: true,
                        isDeviated: false,
                        lastInvoiceCasePrice: null,
                        lastInvoiceCaseQuantity: null,
                        lastInvoiceEachPrice: null,
                        lastInvoiceEachQuantity: null,
                        autoApplySpecialPriceCode: null,
                        starCasePrice1: 40.0,
                        starCasePrice3: 40.0,
                        starCasePrice5: 40.0,
                        starEachPrice1: null,
                        starEachPrice3: null,
                        starEachPrice5: null,
                        caseOverrideThreshold: 40.0,
                        eachOverrideThreshold: null,
                        flyerPrices: []
                      },
                      freight: { code: "I", caseAmount: 2.6, eachAmount: null },
                      caseHistory: null,
                      eachHistory: null
                    },
                    featured: false,
                    critical: false
                  }
                },
                {
                  id: "08adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  version: "AAAAAElojIE=",
                  orderId: "02adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  productId: "543aba06-506f-4d1e-8d3f-728582f4e841",
                  price: 40.0,
                  priceCode: null,
                  quantity: 5,
                  caseEquivalentQuantity: 5.0,
                  shippedQuantity: null,
                  brokenCase: false,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  cuttingInstructions1Id: null,
                  cuttingInstructions2Id: null,
                  cuttingInstructions3Id: null,
                  specialMessage: null,
                  isPrintSpecialMessage: false,
                  specialPriceCode: null,
                  temporaryOverride: false,
                  permanentOverride: false,
                  sequence: 3,
                  updatedBy: "Billings Tester",
                  updated: "2018-09-18T22:11:27.2738551Z",
                  pricebook: 7630,
                  product: {
                    id: "543aba06-506f-4d1e-8d3f-728582f4e841",
                    number: "445975",
                    name: "CLEANER GRIDDLE QUICK CLEAN LIQUID",
                    description:
                      "LIQUID GRIDDLE CLEANER, QUART BTL. CLEANS FLAT GRIDDLES AT 325 DEG., SAFE ON FOOD CONTACT SURFACES.NO CHEMICAL ODOR. NO CAUSTIC SODA.USE WITH #405 PAD HLDR,#46 GRILL PAD,#410 SQUEEGEE. SDS AVAILABLE ON FSAFOOD.COM",
                    brand: "SCOTCH-BRITE",
                    fsaBranded: false,
                    classNumber: " 76",
                    breakCase: false,
                    pack: 4,
                    size: "32Z",
                    packSize: "4/32Z",
                    weight: 12.01,
                    averageWeight: null,
                    nonStock: null,
                    nonStockMessage: null,
                    groupPurchasing: null,
                    randomWeight: false,
                    proprietary: false,
                    imageUrl: "https://cxp-cdn.azureedge.net/cards/445975",
                    authorized: true,
                    restricted: false,
                    deactivated: false,
                    orderable: true,
                    orderableMessage: null,
                    suspended: false,
                    proprietaryToAnotherAccount: false,
                    tags: [],
                    badges: [{ name: "Dry", display: "Dry" }],
                    pricing: {
                      productId: "543aba06-506f-4d1e-8d3f-728582f4e841",
                      productNumber: "445975",
                      casePrice: 40.0,
                      priceCode: "L",
                      priceCodeDescription: "L - Customer PB/Class Override",
                      eachPrice: null,
                      eachPriceCode: null,
                      eachPriceCodeDescription: null,
                      quantityOnHand: 82,
                      specialPriceCode: null
                    },
                    salesData: {
                      productId: "543aba06-506f-4d1e-8d3f-728582f4e841",
                      pricing: {
                        caseCost: 40.0,
                        eachCost: null,
                        caseGrossProfit: 0,
                        caseGrossProfitPercent: 0,
                        eachGrossProfit: null,
                        eachGrossProfitPercent: null,
                        isCaseOverride: true,
                        isEachOverride: false,
                        canOverride: true,
                        isDeviated: false,
                        lastInvoiceCasePrice: null,
                        lastInvoiceCaseQuantity: null,
                        lastInvoiceEachPrice: null,
                        lastInvoiceEachQuantity: null,
                        autoApplySpecialPriceCode: null,
                        starCasePrice1: 40.0,
                        starCasePrice3: 40.0,
                        starCasePrice5: 40.0,
                        starEachPrice1: null,
                        starEachPrice3: null,
                        starEachPrice5: null,
                        caseOverrideThreshold: 40.0,
                        eachOverrideThreshold: null,
                        flyerPrices: []
                      },
                      freight: {
                        code: "I",
                        caseAmount: 0.51,
                        eachAmount: null
                      },
                      caseHistory: null,
                      eachHistory: null
                    },
                    featured: false,
                    critical: false
                  }
                },
                {
                  id: "0aadbfc4-8fbb-e811-af11-000d3a30a3ba",
                  version: "AAAAAElojII=",
                  orderId: "02adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  productId: "4b442663-9ad6-49ba-8980-2d9bc0346a0d",
                  price: 40.0,
                  priceCode: null,
                  quantity: 8,
                  caseEquivalentQuantity: 8.0,
                  shippedQuantity: null,
                  brokenCase: false,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  cuttingInstructions1Id: null,
                  cuttingInstructions2Id: null,
                  cuttingInstructions3Id: null,
                  specialMessage: null,
                  isPrintSpecialMessage: false,
                  specialPriceCode: null,
                  temporaryOverride: false,
                  permanentOverride: false,
                  sequence: 4,
                  updatedBy: "Billings Tester",
                  updated: "2018-09-18T22:11:29.5081832Z",
                  pricebook: 7630,
                  product: {
                    id: "4b442663-9ad6-49ba-8980-2d9bc0346a0d",
                    number: "287320",
                    name: "SANITIZER FOAM INSTANT",
                    description:
                      "USE W/DISPENSER MFG# 2720-12E FSA# 287307, MFG# 2421-DS / FSA #424613 OR MFG# 2424-DS / FSA #2937. PUMPS OUT .8MIL W/EACH USE. SDS AVAILABLE ON FSAFOOD.COM",
                    brand: "PURELL",
                    fsaBranded: false,
                    classNumber: " 76",
                    breakCase: false,
                    pack: 2,
                    size: "1.2LTR",
                    packSize: "2/1.2LTR",
                    weight: 6.0,
                    averageWeight: null,
                    nonStock: "Ship Upon Receipt",
                    nonStockMessage: "R3 TRUCK-MON DATE/TUES & THURS 5PM CUTOF",
                    groupPurchasing: null,
                    randomWeight: false,
                    proprietary: false,
                    imageUrl: "https://cxp-cdn.azureedge.net/cards/287320",
                    authorized: true,
                    restricted: false,
                    deactivated: false,
                    orderable: true,
                    orderableMessage: null,
                    suspended: false,
                    proprietaryToAnotherAccount: false,
                    tags: [],
                    badges: [{ name: "Hazmat", display: "Hazmat" }],
                    pricing: {
                      productId: "4b442663-9ad6-49ba-8980-2d9bc0346a0d",
                      productNumber: "287320",
                      casePrice: 40.0,
                      priceCode: "L",
                      priceCodeDescription: "L - Customer PB/Class Override",
                      eachPrice: null,
                      eachPriceCode: null,
                      eachPriceCodeDescription: null,
                      quantityOnHand: 0,
                      specialPriceCode: null
                    },
                    salesData: {
                      productId: "4b442663-9ad6-49ba-8980-2d9bc0346a0d",
                      pricing: {
                        caseCost: 40.0,
                        eachCost: null,
                        caseGrossProfit: 0,
                        caseGrossProfitPercent: 0,
                        eachGrossProfit: null,
                        eachGrossProfitPercent: null,
                        isCaseOverride: true,
                        isEachOverride: false,
                        canOverride: true,
                        isDeviated: false,
                        lastInvoiceCasePrice: null,
                        lastInvoiceCaseQuantity: null,
                        lastInvoiceEachPrice: null,
                        lastInvoiceEachQuantity: null,
                        autoApplySpecialPriceCode: null,
                        starCasePrice1: 40.0,
                        starCasePrice3: 40.0,
                        starCasePrice5: 40.0,
                        starEachPrice1: null,
                        starEachPrice3: null,
                        starEachPrice5: null,
                        caseOverrideThreshold: 40.0,
                        eachOverrideThreshold: null,
                        flyerPrices: []
                      },
                      freight: {
                        code: "I",
                        caseAmount: 0.27,
                        eachAmount: null
                      },
                      caseHistory: null,
                      eachHistory: null
                    },
                    featured: false,
                    critical: false
                  }
                },
                {
                  id: "2e837bcb-8fbb-e811-af11-000d3a30a3ba",
                  version: "AAAAAElojIM=",
                  orderId: "02adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  productId: "164cfb45-1096-48d2-af58-0f90fa69b0b1",
                  price: 40.0,
                  priceCode: null,
                  quantity: 7,
                  caseEquivalentQuantity: 7.0,
                  shippedQuantity: null,
                  brokenCase: false,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  cuttingInstructions1Id: null,
                  cuttingInstructions2Id: null,
                  cuttingInstructions3Id: null,
                  specialMessage: null,
                  isPrintSpecialMessage: false,
                  specialPriceCode: null,
                  temporaryOverride: false,
                  permanentOverride: false,
                  sequence: 5,
                  updatedBy: "Billings Tester",
                  updated: "2018-09-18T22:11:31.3162523Z",
                  pricebook: 7630,
                  product: {
                    id: "164cfb45-1096-48d2-af58-0f90fa69b0b1",
                    number: "778384",
                    name: "SANITIZER QUAT OASIS 146",
                    description:
                      "DISINFECTANT, SANITIZER, DEODORIZER, ONE STEP CLEANER/DISINFECTANT FOR INSTITUTIONAL AND INDUSTRIAL USE. SDS AVAILABLE ON FSAFOOD.COM",
                    brand: "ECOLAB",
                    fsaBranded: false,
                    classNumber: " 76",
                    breakCase: false,
                    pack: 1,
                    size: "2.5GAL",
                    packSize: "1/2.5GAL",
                    weight: 22.0,
                    averageWeight: null,
                    nonStock: null,
                    nonStockMessage: null,
                    groupPurchasing: null,
                    randomWeight: false,
                    proprietary: false,
                    imageUrl: "https://cxp-cdn.azureedge.net/cards/778384",
                    authorized: true,
                    restricted: false,
                    deactivated: false,
                    orderable: true,
                    orderableMessage: null,
                    suspended: false,
                    proprietaryToAnotherAccount: false,
                    tags: [],
                    badges: [
                      { name: "Kosher", display: "Kosher" },
                      { name: "Dry", display: "Dry" }
                    ],
                    pricing: {
                      productId: "164cfb45-1096-48d2-af58-0f90fa69b0b1",
                      productNumber: "778384",
                      casePrice: 40.0,
                      priceCode: "L",
                      priceCodeDescription: "L - Customer PB/Class Override",
                      eachPrice: null,
                      eachPriceCode: null,
                      eachPriceCodeDescription: null,
                      quantityOnHand: 38,
                      specialPriceCode: null
                    },
                    salesData: {
                      productId: "164cfb45-1096-48d2-af58-0f90fa69b0b1",
                      pricing: {
                        caseCost: 40.0,
                        eachCost: null,
                        caseGrossProfit: 0,
                        caseGrossProfitPercent: 0,
                        eachGrossProfit: null,
                        eachGrossProfitPercent: null,
                        isCaseOverride: true,
                        isEachOverride: false,
                        canOverride: true,
                        isDeviated: false,
                        lastInvoiceCasePrice: null,
                        lastInvoiceCaseQuantity: null,
                        lastInvoiceEachPrice: null,
                        lastInvoiceEachQuantity: null,
                        autoApplySpecialPriceCode: null,
                        starCasePrice1: 40.0,
                        starCasePrice3: 40.0,
                        starCasePrice5: 40.0,
                        starEachPrice1: null,
                        starEachPrice3: null,
                        starEachPrice5: null,
                        caseOverrideThreshold: 40.0,
                        eachOverrideThreshold: null,
                        flyerPrices: []
                      },
                      freight: {
                        code: "I",
                        caseAmount: 0.94,
                        eachAmount: null
                      },
                      caseHistory: null,
                      eachHistory: null
                    },
                    featured: false,
                    critical: false
                  }
                },
                {
                  id: "30837bcb-8fbb-e811-af11-000d3a30a3ba",
                  version: "AAAAAElojIQ=",
                  orderId: "02adbfc4-8fbb-e811-af11-000d3a30a3ba",
                  productId: "1b7f8b00-c0c8-4682-879b-b01922ba3b69",
                  price: 40.0,
                  priceCode: null,
                  quantity: 4,
                  caseEquivalentQuantity: 4.0,
                  shippedQuantity: null,
                  brokenCase: false,
                  grossProfit: 0,
                  grossProfitPercent: 0,
                  cuttingInstructions1Id: null,
                  cuttingInstructions2Id: null,
                  cuttingInstructions3Id: null,
                  specialMessage: null,
                  isPrintSpecialMessage: false,
                  specialPriceCode: null,
                  temporaryOverride: false,
                  permanentOverride: false,
                  sequence: 6,
                  updatedBy: "Billings Tester",
                  updated: "2018-09-18T22:11:32.7850183Z",
                  pricebook: 7630,
                  product: {
                    id: "1b7f8b00-c0c8-4682-879b-b01922ba3b69",
                    number: "656585",
                    name: "SANITIZER ULTRA SAN LOW TEMPERATURE",
                    description:
                      "ENERGY EFFICIENT DISHMACHINE SANITIZER.  FAST-ACTING, STABLE FORMULA ENSURES OPTIMUM RESULTS AND PROLONGS SHELF LIFE.  EPA REGISTERED. SDS AVAILABLE ON FSAFOOD.COM",
                    brand: "ECOLAB",
                    fsaBranded: false,
                    classNumber: " 76",
                    breakCase: false,
                    pack: 1,
                    size: "5GAL",
                    packSize: "1/5GAL",
                    weight: 51.3,
                    averageWeight: null,
                    nonStock: null,
                    nonStockMessage: null,
                    groupPurchasing: null,
                    randomWeight: false,
                    proprietary: false,
                    imageUrl: "https://cxp-cdn.azureedge.net/cards/656585",
                    authorized: true,
                    restricted: false,
                    deactivated: false,
                    orderable: true,
                    orderableMessage: null,
                    suspended: false,
                    proprietaryToAnotherAccount: false,
                    tags: [],
                    badges: [
                      { name: "Kosher", display: "Kosher" },
                      { name: "Hazmat", display: "Hazmat" }
                    ],
                    pricing: {
                      productId: "1b7f8b00-c0c8-4682-879b-b01922ba3b69",
                      productNumber: "656585",
                      casePrice: 40.0,
                      priceCode: "L",
                      priceCodeDescription: "L - Customer PB/Class Override",
                      eachPrice: null,
                      eachPriceCode: null,
                      eachPriceCodeDescription: null,
                      quantityOnHand: 33,
                      specialPriceCode: null
                    },
                    salesData: {
                      productId: "1b7f8b00-c0c8-4682-879b-b01922ba3b69",
                      pricing: {
                        caseCost: 40.0,
                        eachCost: null,
                        caseGrossProfit: 0,
                        caseGrossProfitPercent: 0,
                        eachGrossProfit: null,
                        eachGrossProfitPercent: null,
                        isCaseOverride: true,
                        isEachOverride: false,
                        canOverride: true,
                        isDeviated: false,
                        lastInvoiceCasePrice: null,
                        lastInvoiceCaseQuantity: null,
                        lastInvoiceEachPrice: null,
                        lastInvoiceEachQuantity: null,
                        autoApplySpecialPriceCode: null,
                        starCasePrice1: 40.0,
                        starCasePrice3: 40.0,
                        starCasePrice5: 40.0,
                        starEachPrice1: null,
                        starEachPrice3: null,
                        starEachPrice5: null,
                        caseOverrideThreshold: 40.0,
                        eachOverrideThreshold: null,
                        flyerPrices: []
                      },
                      freight: {
                        code: "I",
                        caseAmount: 2.31,
                        eachAmount: null
                      },
                      caseHistory: null,
                      eachHistory: null
                    },
                    featured: false,
                    critical: false
                  }
                }
              ];
              return of(
                new HttpResponse({ status: 200, body: orderDetailLegacy })
              );
            }

            // get orders
            if (request.url.endsWith("/orders") && request.method === "GET") {
              const orders = [
                {
                  id: "o1",
                  name: "Tom's Order",
                  lineItems: [
                    {
                      lid: "li1",
                      pid: "p1",
                      qtyEach: 3
                    },
                    {
                      lid: "li3",
                      pid: "p3",
                      qtyCase: 1
                    }
                  ]
                },
                {
                  id: "o2",
                  name: "Stephanie's Order",
                  lineItems: [
                    {
                      lid: "li3",
                      pid: "p3",
                      qtyEach: 3
                    },
                    {
                      lid: "li4",
                      pid: "p4",
                      qtyEach: 3
                    }
                  ]
                }
              ];
              return of(new HttpResponse({ status: 200, body: orders }));
            }

            // add order
            if (
              request.url.endsWith("/orders/add") &&
              request.method === "POST"
            ) {
              request.body.id = new Date().getUTCMilliseconds().toString();
              // respond 200 OK
              return of(new HttpResponse({ status: 200, body: request.body }));
            }

            // update quantity
            if (
              request.url.endsWith("/order-detail/update") &&
              request.method === "POST"
            ) {
              const detail = {
                id: request.body.id,
                quantity: request.body.quantity
              };
              // respond 200 OK
              return of(new HttpResponse({ status: 200, body: detail }));
            }

            //all calls to work that aren't handeled
            return next.handle(request);
          })
        )

        //delay the response
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );
  }
}

export let fakeServerProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeServerInterceptor,
  multi: true
};
