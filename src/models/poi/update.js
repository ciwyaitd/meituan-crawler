'use strict'

const { client: pg } = require('../../utils/postgres')
const tables = require('../../constants/tables')
const logger = require('../../utils/logger')

async function update (poi) {
  const text = `
    UPDATE 
    ${tables.MEITUAN}
    SET
      phone = $1, 
      latest_week_coupou = $2, 
      city_id = $3, 
      addr = $4, 
      brand_name = $5, 
      brand_id = $6, 
      group_info = $7, 
      show_type = $8, 
      is_snack = $9, 
      discount = $10, 
      history_coupon_count = $11, 
      avg_price = $12, 
      avg_score = $13, 
      lowest_price = $14, 
      introduction = $15, 
      mark_numbers = $16, 
      area_id = $17, 
      subway_station_id = $18, 
      preferent = $19, 
      is_support_appointment = $20, 
      reference_price = $21, 
      style = $22, 
      feature_menus = $23, 
      name = $24, 
      lng = $25,  
      lat = $26, 
      is_waimai = $27, 
      is_hot = $28, 
      mall_id = $29, 
      has_group = $30, 
      cates = $31, 
      wifi = $32, 
      allow_refund = $33, 
      area_name = $34, 
      open_info = $35, 
      cate_name = $36,
      updated_at = NOW()
    WHERE poi_id = $37
    `

  const values = [
    poi.phone,
    poi.latest_week_coupou,
    poi.city_id,
    poi.addr,
    poi.brand_name,
    poi.brand_id,
    poi.group_info,
    poi.show_type,
    poi.is_snack,
    poi.discount,
    poi.history_coupon_count,
    poi.avg_price,
    poi.avg_score,
    poi.lowest_price,
    poi.introduction,
    poi.mark_numbers,
    poi.area_id,
    poi.subway_station_id,
    poi.preferent,
    poi.is_support_appointment,
    poi.reference_price,
    poi.style,
    poi.feature_menus,
    poi.name,
    poi.lng,
    poi.lat,
    poi.is_waimai,
    poi.is_hot,
    poi.mall_id,
    poi.has_group,
    poi.cates,
    poi.wifi,
    poi.allow_refund,
    poi.area_name,
    poi.open_info,
    poi.cate_name,
    poi.poi_id
  ]

  try {
    const result = await pg.query(text, values)
    if (result.rowCount > 0) {
      logger.info(`[SQL] Updated data - poi_id: ${poi.poi_id} successfully`)
    } else {
      logger.error(`[SQL] Updated data - poi_id: ${poi.poi_id} with err: Can't match conditions`)
    }
    return result.rowCount
  } catch (err) {
    logger.error(`[SQL] Updated data - poi_id: ${poi.poi_id} with err: ${err.message}`)
    return 0
  }
}

module.exports = update
