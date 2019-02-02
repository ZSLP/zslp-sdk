"use strict"
const assert = require("assert")
const slp = require("./../lib/SLP").default
const SLP = new slp({
  restURL: "https://rest.bitcoin.com/v1/"
})

describe("#Utils", () => {
  describe("#list", () => {
    it(`should list all SLP tokens`, async () => {
      try {
        const list = await SLP.Utils.list()
        assert.deepEqual(Object.keys(list[0]), [
          "id",
          "timestamp",
          "symbol",
          "name",
          "document"
        ])
      } catch (error) {
        throw error
      }
    })

    it(`should list single SLP token by id: 4276533bb702e7f8c9afd8aa61ebf016e95011dc3d54e55faa847ac1dd461e84`, async () => {
      try {
        const list = await SLP.Utils.list(
          "4276533bb702e7f8c9afd8aa61ebf016e95011dc3d54e55faa847ac1dd461e84"
        )
        assert.deepEqual(Object.keys(list), [
          "id",
          "timestamp",
          "symbol",
          "name",
          "document"
        ])
      } catch (error) {
        throw error
      }
    })
  })

  describe("#balancesForAddress", () => {
    it(`should fetch all balances for address: simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk`, async () => {
      try {
        const balances = await SLP.Utils.balancesForAddress(
          "simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk"
        )
        assert.equal(balances.satoshis_in_slp_baton, 0)
      } catch (error) {
        throw error
      }
    })
  })

  describe("#balance", () => {
    it(`should fetch balance of single token for address: simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk`, async () => {
      try {
        const balance = await SLP.Utils.balance(
          "simpleledger:qr5agtachyxvrwxu76vzszan5pnvuzy8duhv4lxrsk",
          "df808a41672a0a0ae6475b44f272a107bc9961b90f29dc918d71301f24fe92fb"
        )
        console.log("ALALALA", balance)
        assert.equal(balance.c, 61700000000)
      } catch (error) {
        throw error
      }
    })
  })
})