package model

type Record struct {
	UID   int `json:"uid"`
	ID    int `json:"id" gorm:"praimaly_key"`
	Point int `json:"point"`
}

type Records []Record

func FindRecords(r *Record) Records {
	var records Records
	db.Where(r).Find(&records)
	return records
}
