<template>
  <section class="case">
    <div class="_container">
      <div class="case-wrapper">
        <div class="case-content">
          <div id="grass-left"></div>
          <h2 class="case-content-title">С нами реально <br class="case-br-desktop"> зарабатывают</h2>
          <div class="case-content-text">
            <h3>Кейс: Миллион за 3 дня</h3>
            <p class="case-content-text-description">Кира Юхтенко, YouTube канал InvestFuture, в одном из выпусков анонсировала акцию “Вечной бесплатное обслуживание Tinkoff Black” и заработала 1 млн+.</p>
            <p class="case-content-text-duration">Срок проведения акции: 3 дня</p>
            <p class="case-content-stats">
              <p>Просмотры ролика: <span class="case-content-stats-highlight">82 000 <br></span>
                Оплаченные заявки: <span class="case-content-stats-highlight">1 269 <br> </span>
                Выплачено: <span class="case-content-stats-highlight">1 015  200 ₽ <br> </span></p>
            </p>
          </div>
        </div>

        <div class="video-holder" @click.once="videoIsClicked = true">

          <iframe v-if="videoIsClicked" width="100%" height="100%" src="https://www.youtube.com/embed/6DgsVKKCKOE?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>

        <div id="loop"></div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoIsClicked: false,
    }
  }
}
</script>
