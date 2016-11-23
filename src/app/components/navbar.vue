<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">vue boilerplate</a>
      </div>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav">
          <li><router-link to="/" href="#"><i class="fa fa-lg fa-home"></i></router-link></li>
          <li><router-link to="/settings" href="#"><i class="fa fa-lg fa-cogs"></i></router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
