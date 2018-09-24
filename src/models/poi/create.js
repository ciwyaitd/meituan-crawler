'use strict'

const { client: pg } = require('../../utils/postgres')
const tables = require('../../constants/tables')
const logger = require('../../utils/logger')

async function create (poi) {
  const text = `
    INSERT INTO 
    ${tables.MEITUAN}(
      phone, 
      latest_week_coupou, 
      city_id, 
      addr, 
      brand_name, 
      brand_id, 
      poi_id, 
      group_info, 
      show_type, 
      is_snack, 
      discount, 
      history_coupon_count, 
      avg_price, 
      avg_score, 
      lowest_price, 
      introduction, 
      mark_numbers, 
      area_id, 
      subway_station_id, 
      preferent, 
      is_support_appointment, 
      reference_price, 
      style, 
      feature_menus, 
      name, 
      lng, 
      lat, 
      is_waimai, 
      is_hot, 
      mall_id, 
      has_group, 
      cates, 
      wifi, 
      allow_refund, 
      area_name, 
      open_info, 
      cate_name
    )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37)
    RETURNING *`

  const values = [
    poi.phone,
    poi.latest_week_coupou,
    poi.city_id,
    poi.addr,
    poi.brand_name,
    poi.brand_id,
    poi.poi_id,
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
    poi.cate_name
  ]

  try {
    const result = await pg.query(text, values)
    if (result.rowCount > 0) {
      logger.info(`[poi] Created new data: ${result.rows[0].meituan_id}`)
    }
    return result.rowCount
  } catch (err) {
    logger.error(`[poi] Created new data: ${err.message}`)
    return 0
  }
}

module.exports = create
