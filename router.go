package main

import (
	"io"
	"mime"
	"text/template"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/tomato3713/cw_for_web/handler"
)

type Template struct {
	templates *template.Template
}

func newRouter() *echo.Echo {
	// for windows probrem: return incorrect MIME Type "text/plain"
	mime.AddExtensionType(".js", "application/javascript")

	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())

	// service worker
	e.Static("/assets", "static/assets")
	e.File("/manifest.json", "static/manifest.json")
	e.File("/favicon.ico", "static/assets/img/icon/favicon.ico")
	e.GET("/", handler.Index)
	e.GET("/runner", handler.Runner)
	e.GET("/tutor", handler.Tutor)
	e.GET("/history", handler.History)

	// authorization
	e.GET("/signup", handler.Signup)
	e.POST("/signup", handler.SignupProcess)
	e.GET("/login", handler.Login)
	e.POST("/login", handler.LoginProcess)

	e.GET("/profile", handler.Profile)

	api := e.Group("/api")
	api.Use(middleware.JWTWithConfig(handler.Config))
	api.GET("records", handler.GetRecords)

	t := &Template{
		templates: template.Must(template.ParseGlob("static/views/*.html")),
	}
	e.Renderer = t

	return e
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}
