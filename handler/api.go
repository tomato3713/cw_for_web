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
