package handler

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/tomato3713/cw_for_web/model"
)

func GetRecords(c echo.Context) error {
	uid := userIDFromToken(c)
	if user := model.FindUser(&model.User{ID: uid}); user.ID == 0 {
		return echo.ErrNotFound
	}

	records := model.FindRecords(&model.Record{UID: uid})

	return c.JSON(http.StatusOK, records)
}

func AddRecord(c echo.Context) error {
	record := new(model.Record)
	if err := c.Bind(record); err != nil {
		return err
	}

	if record.Mode == "" {
		return &echo.HTTPError{
			Code:    http.StatusBadRequest,
			Message: "invalid point or mode field",
		}
	}

	uid := userIDFromToken(c)
	if user := model.FindUser(&model.User{ID: uid}); user.ID == 0 {
		return echo.ErrNotFound
	}

	record.UID = uid
	model.CreateRecord(record)
	return c.JSON(http.StatusCreated, record)
}
