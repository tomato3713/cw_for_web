package model

import "fmt"

type Record struct {
	UID   int    `json:"uid"`
	ID    int    `json:"id" gorm:"praimaly_key"`
	Point int    `json:"point"`
	Mode  string `json:"mode"`
}

type Records []Record

func FindRecords(r *Record) Records {
	var records Records
	db.Where(r).Find(&records)
	return records
}

func CreateRecord(r *Record) {
	db.Create(r)
}

func UpdateRecord(r *Record) error {
	// 同一モードでの記録を更新する
	rows := db.Model(r).Where("Mode = ?", r.Mode).Update(map[string]interface{}{
		"Point": r.Point,
	}).RowsAffected
	if rows == 0 {
		return fmt.Errorf("Could not find record (%v) to update", r)
	}

	return nil
}
